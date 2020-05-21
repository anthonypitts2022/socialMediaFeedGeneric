
const addReqHeaders = (apolloFetch, authToken) => {
    apolloFetch.use(({ request, options }, next) => {
      if (!options.headers) {
          options.headers = {};  // Create the headers object if needed.
      }
      options.headers["Authorization"] = authToken || undefined;
      options.headers["Access-Control-Allow-Headers"] = "Authorization"

      next();
    });
    
    return apolloFetch
  };
  
  module.exports = { addReqHeaders };