import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o4e3t70g3m01xr1wk6cmvd/master",
  cache: new InMemoryCache(),
});
