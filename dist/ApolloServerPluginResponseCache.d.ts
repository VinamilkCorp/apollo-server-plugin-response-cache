import type { ApolloServerPlugin } from "apollo-server-plugin-base";
import type { GraphQLRequestContext, ValueOrPromise } from "apollo-server-types";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
interface Options<TContext = Record<string, any>> {
    cache?: KeyValueCache;
    sessionId?(requestContext: GraphQLRequestContext<TContext>): ValueOrPromise<string | null>;
    extraCacheKeyData?(requestContext: GraphQLRequestContext<TContext>): ValueOrPromise<any>;
    shouldReadFromCache?(requestContext: GraphQLRequestContext<TContext>): ValueOrPromise<boolean>;
    shouldWriteToCache?(requestContext: GraphQLRequestContext<TContext>): ValueOrPromise<boolean>;
    generateCacheKey?(requestContext: GraphQLRequestContext<Record<string, any>>, keyData: unknown): string;
}
export default function plugin(options?: Options): ApolloServerPlugin;
export {};
//# sourceMappingURL=ApolloServerPluginResponseCache.d.ts.map