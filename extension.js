(function(Scratch) {
    'use strict';
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('PooPoo must run unsandboxed');
    }
    class poopoo {
      getInfo() {
        return {
          id: 'poopoo',
          name: 'PooPoo',
          blocks: [
            {
                opcode: 'hello',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Hello!'
              },
          ]
        };
      }
    // Block Code Here
    }
    Scratch.extensions.register(new poopoo());
  })(Scratch);