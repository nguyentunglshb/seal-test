// Câu 2: Cho một dãy số [1, 25, 7, -7, -3, 12, -22, 0]
// Sử dụng JavaScript để sắp xếp dãy số theo thứ tự tăng dần.
// 	Kết quả: [-22, -7, -3, 0, 1, 7, 12, 25]

const arr: number[] = [1, 25, 7, -7, -3, 12, -22, 0];

const sortASC = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

// Sắp xếp dãy số tăng dần theo giá trị tuyệt đối (trong trường hợp số 2 số bằng nhau thì số âm được ưu tiên đứng trước)
// 	Kết quả: [0, 1, -3, -7, 7, 12, -22, 25]

const absNumber = (n: number): number => {
  return n >= 0 ? n : -n;
};

const sortAbsASC = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (absNumber(arr[i]) === absNumber(arr[j])) {
        if (arr[i] < arr[j]) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }

      if (absNumber(arr[i]) < absNumber(arr[j])) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};
