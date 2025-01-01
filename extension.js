(function(Scratch) {
    'use strict';
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('Code Freezer must run unsandboxed');
    }
    class poopoo {
      getInfo() {
        return {
          id: 'codefreeze',
          name: 'Code Freezer',
          blocks: [
            {
                opcode: 'freeze',
                blockType: Scratch.BlockType.REPORTER,
                text: 'Freeze script'
              },
              {
                opcode: 'freezecom',
                blockType: Scratch.BlockType.COMMAND,
                text: 'Freeze script'
              },
          ]
        };
      }
    // Block Code Here
    }
    Scratch.extensions.register(new codefreeze());
  })(Scratch);