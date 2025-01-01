(function(Scratch) {
    'use strict';
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('Code Freezer must run unsandboxed');
    }
    class codefreezer {
      getInfo() {
        return {
          id: 'codefreezer',
          name: 'Code Freezer',
          blocks: [
            {
                opcode: 'hello',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Freeze!'
              },
          ]
        };
      }
    // Block Code Here
    }
    Scratch.extensions.register(new codefreezer());
  })(Scratch);