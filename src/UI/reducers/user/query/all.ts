import { GraphQLError } from 'graphql';

import GetAllUsersQuery from "application/query/user/getAllUsers/getAllUsersQuery";

export default  async (root, {page, size}, context) => {
    try {
        const res: any = await context.ask(new GetAllUsersQuery(size || 25, page || 1));

        return res.data;
    } catch (err) {

        return new GraphQLError("User not found")
    }
}