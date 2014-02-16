describe('Modules', function(){
  describe('should be available', function() {
    it('within client scope', function() {
      return Modules.name === 'modules';
    })
  })
  describe('should know when something is added', function(done){
    it('should return when something is added to the collection', function(done) {
      var id;

      function addedNewPost() {
        // remove test insert
        Modules.remove(id);
        return done();
      }

      Modules.find().observe({
        added: addedNewPost
      });

      id = Modules.insert({name: 'test'})
    })
  })
})

describe('Work', function(){
  describe('should be available', function() {
    it('within client scope', function() {
      return Work.name === 'work';
    })
  })
  describe('should know when something is added', function(done){
    it('should return when something is added to the collection', function(done) {
      var id;

      function addedNewPost() {
        // remove test insert
        Work.remove(id);
        return done();
      }

      Work.find().observe({
        added: addedNewPost
      });

      id = Work.insert({name: 'test'})
    })
  })

})
