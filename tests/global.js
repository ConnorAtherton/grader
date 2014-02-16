assert = chai.assert;

describe('Meteor Object', function(){
  describe('available', function(){
    it('should be present', function(){
      return Meteor;
    })
  })

  describe('should be an object', function(){
    it('should be an object', function(){
      return Meteor.toString() === '[Object object]';
    })
  })

  describe ('should recognize state', function(){
    it('should know code is running on the client', function() {
      return Meteor.isClient;
    })
  })
})

