const Mutations = {
    // async method - createItem returns a promise

    async createItem(parent, args, ctx, info) {
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        // info contains the query
        }, info)
        return item
    }

};

module.exports = Mutations;
