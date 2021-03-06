import gql from 'graphql-tag';

export const userTypes = gql`
    extend type Query {
        userList(queryArgs: QueryListArgs): UserPage
        login(credentials: Credentials!): UserSession
    }

    extend type Mutation {
        createUser(user: UserInput!): User
        deleteUser(id: ID!): User
    }

    type UserSession {
        user: User
        token: String
    }

    type UserPage implements DataPage {
        pageSize: Int
        page: Int
        totalRecords: Int
        content: [User]
    }

    type User implements BaseModel {
        _id: ID
        createdAt: Date
        username: String
        name: String
        surname: String
        email: String
    }

    input UserInput {
        username: String!
        name: String!
        surname: String!
        password: String!
        email: String!
    }

    input Credentials {
        username: String!
        password: String!
    }
`;
