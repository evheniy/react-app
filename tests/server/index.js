const chai = require('chai');
const chaiHttp = require('chai-http');
const dirtyChai = require('dirty-chai');

const server = require('../../server');

chai.use(dirtyChai);
chai.use(chaiHttp);

const { expect } = chai;

describe('GraphQL test', () => {
  after((done) => {
    server.close(done);
  });

  it('should test empty storage', async () => {
    let isTestFinished = false;

    const data = {
      query: `
        {
          users {
            id,
            name,
          }
        }
      `,
    };

    await chai.request(server)
      .get('/graphql')
      .query(data)
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.users).is.a('array');
        isTestFinished = true;
      });

    expect(isTestFinished).is.true();
  });

  it('should test create a new user', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    const id = 1;
    const name = 'User 1';

    const data = {
      query: `
        mutation {
          createUser(id: ${id}, name: "${name}") {
            id,
            name,
          }
        }
      `,
    };

    await chai.request(server)
      .post('/graphql')
      .send(data)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.createUser.id).to.be.equal(id);
        expect(res.body.data.createUser.name).to.be.equal(name);
        isTestFinished1 = true;
      });

    const data2 = {
      query: `
        {
          users {
            id,
            name,
          }
        }
      `,
    };

    await chai.request(server)
      .get('/graphql')
      .query(data2)
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.users).is.a('array');
        expect(res.body.data.users[0].id).to.be.equal(id);
        expect(res.body.data.users[0].name).to.be.equal(name);
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true();
    expect(isTestFinished2).is.true();
  });

  it('should test user', async () => {
    let isTestFinished = false;

    const id = 1;

    const data = {
      query: `
        {
          user(id: ${id}) {
            id,
            name,
          }
        }
      `,
    };

    await chai.request(server)
      .get('/graphql')
      .query(data)
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.user.id).to.be.equal(id);
        isTestFinished = true;
      });

    expect(isTestFinished).is.true();
  });

  it('should test user with wrong id', async () => {
    let isTestFinished = false;

    const id = 100;

    const data = {
      query: `
        {
          user(id: ${id}) {
            id,
            name,
          }
        }
      `,
    };

    await chai.request(server)
      .get('/graphql')
      .query(data)
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.user).is.null();
        expect(res.body.errors).is.a('array');
        expect(res.body.errors[0].message).to.be.equal('User not found!');
        isTestFinished = true;
      });

    expect(isTestFinished).is.true();
  });

  it('should test updating user', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    const id = 1;
    const name = 'New User name';

    const data = {
      query: `
        mutation {
          updateUser(id: ${id}, name: "${name}") {
            id,
            name,
          }
        }
      `,
    };

    await chai.request(server)
      .post('/graphql')
      .send(data)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.updateUser.id).to.be.equal(id);
        expect(res.body.data.updateUser.name).to.be.equal(name);
        isTestFinished1 = true;
      });

    const data2 = {
      query: `
        {
          users {
            id,
            name,
          }
        }
      `,
    };

    await chai.request(server)
      .get('/graphql')
      .query(data2)
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.users).is.a('array');
        expect(res.body.data.users[0].id).to.be.equal(id);
        expect(res.body.data.users[0].name).to.be.equal(name);
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true();
    expect(isTestFinished2).is.true();
  });

  it('should test deleting user', async () => {
    let isTestFinished1 = false;
    let isTestFinished2 = false;

    const id = 1;

    const data = {
      query: `
        mutation {
          deleteUser(id: ${id}) {
            id,
            name,
          }
        }
      `,
    };

    await chai.request(server)
      .post('/graphql')
      .send(data)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.deleteUser.id).to.be.equal(id);
        expect(res.body.data.deleteUser.name).is.null();
        isTestFinished1 = true;
      });

    const data2 = {
      query: `
        {
          users {
            id,
            name,
          }
        }
      `,
    };

    await chai.request(server)
      .get('/graphql')
      .query(data2)
      .send()
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body.data.users).is.a('array');
        expect(res.body.data.users.length).to.be.equal(0);
        isTestFinished2 = true;
      });

    expect(isTestFinished1).is.true();
    expect(isTestFinished2).is.true();
  });
});
