import gql from 'graphql-tag';

export const orderTypes = gql`
    extend type Query {
        orderList(queryArgs: QueryListArgs): OrderPage
        getOrder(id: ID!): Order
    }

    extend type Mutation {
        createOrder(order: OrderInput!): Order
        changeOrderStatus(id: ID!, status: String): Order
        payForOrder(id: ID!): Order
    }

    type OrderPage implements DataPage {
        pageSize: Int
        page: Int
        totalRecords: Int
        content: [Order]
    }

    type Order implements BaseModel {
        _id: ID
        createdAt: Date
        orderNo: String
        name: String
        surname: String
        email: String
        phone: String
        street: String
        houseNumber: String
        apartmentNumber: String
        city: String
        postalCode: String
        delivery: String
        status: String
        paid: Boolean
        products: [OrderItem]
    }

    input OrderInput {
        name: String
        surname: String
        email: String
        phone: String
        street: String
        houseNumber: String
        apartmentNumber: String
        city: String
        postalCode: String
        delivery: String
        products: [OrderItemInput]
    }

    type OrderItem implements BaseModel {
        _id: ID
        createdAt: Date
        product: Product
        amount: Int
    }

    input OrderItemInput {
        productId: String
        amount: Int
    }
`;
