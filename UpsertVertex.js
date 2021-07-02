function spaddvertex (doc) {
    var context = getContext();
    var collection = context.getCollection();
    var collectionLink = collection.getSelfLink();
    var response = context.getResponse();
    
 if (!doc) {  throw new Error('Missing required parameter.');  }
    var documents = typeof doc === "string" ? JSON.parse(doc) : doc;
    
     documents.forEach(function (document) {
           var err = !collection.upsertDocument(collectionLink, document);
              if (err) {
                   throw new Error('The query was not accepted by the server.');
                       }
               context.getResponse().setBody("Success");
        
                 }
                 );
}
