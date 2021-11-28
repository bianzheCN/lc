//============= 测试代码 ==============
const list = [
  { id: 1001, parentId: 0, name: "AA" },
  { id: 1002, parentId: 1001, name: "BB" },
  { id: 1003, parentId: 1001, name: "CC" },
  { id: 1004, parentId: 1003, name: "DD" },
  { id: 1005, parentId: 1003, name: "EE" },
  { id: 1006, parentId: 1002, name: "FF" },
  { id: 1007, parentId: 1002, name: "GG" },
  { id: 1008, parentId: 1004, name: "HH" },
  { id: 1009, parentId: 1005, name: "II" },
];
// 实现printTree函数
printTree(list);

// 输出：
// AA
//    BB
//      FF
//      GG
//    CC
//      DD
//        HH
//      EE
//        II

function printTree(list) {
  list.sort((a, b) => a.id - b.id);
  const map = {};
  const arr = [];

  for (const item of list) {
    map[item.id] = item;
    if (item.parentId === 0) {
      arr.push(item);
    } else {
      if (!map[item.parentId].children) {
        const children = [];
        children.push(item);
        map[item.parentId].children = children;
      } else {
        map[item.parentId].children.push(item);
      }
    }
  }

  const dfs = (cur, path) => {
    path = "  " + path;

    cur.forEach((item) => {
      console.log(path + item.name);
      if (item.children) return dfs(item.children, path);
    });
  };

  dfs(arr, "");
}
