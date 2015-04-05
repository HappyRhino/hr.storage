var storage = require("../");
var Cache = storage.Cache;

describe('Storage', function() {
    it('should correctly set/get a plain value', function() {
        storage.set("test", "hello");
        expect(storage.get("test")).to.equal("hello");
    });

    it('should correctly set/get objects', function() {
        storage.set("test2", { "hello": "world" });
        expect(storage.get("test2")).to.have.property("hello");
    });

    it('should correctly clear values', function() {
        storage.clear();
        expect(storage.get("test")).to.equal(undefined);
        expect(storage.get("test2")).to.equal(undefined);
    });
});

