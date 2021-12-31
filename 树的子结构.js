/**
       * Definition for a binary tree node.
       * function TreeNode(val) {
       *     this.val = val;
       *     this.left = this.right = null;
       * }
       */
      /**
       * @param {TreeNode} A
       * @param {TreeNode} B
       * @return {boolean}
       */
      var isSubStructure = function (A, B) {
        // firstly, search root of B
        // if got, judge A left, right sub-tree will match B left, right sub-tree
        return (
          !!A &&
          !!B &&
          (recur(A, B) ||
            isSubStructure(A.left, B) ||
            isSubStructure(A.right, B))
        )
      }

      var recur = function (A, B) {
        if (!B) return true
        if (!A || A.val !== B.val) return false

        return recur(A.left, B.left) && recur(A.right, B.right)
      }