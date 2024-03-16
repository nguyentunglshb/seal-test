// Câu 3: Viết hàm sử dụng regex biến đổi url theo định dạng mong muốn. Hàm này có mục tiêu làm thay đổi kích thước ảnh theo các tỷ lệ đã được định nghĩa trước:

// Lưu ý: Một số đặc điểm của kích thước:
// Các định dạng: _100x, _x100, _100x100
// Nằm liền kề dấu chấm của phần mở rộng: url_100x.jpg

type Image = {
  input: string;
  output: string;
  size: string;
};

let tests: Image[] = [
  {
    input: "https://cdn.shopify.com/e.jpg?v=15",
    output: "https://cdn.shopify.com/e_100x.jpg?v=15",
    size: "100x",
  },
  {
    input: "https://cdn.shopify.com/e_100x200.jpg?v=15",
    output: "https://cdn.shopify.com/e_x200.jpg?v=15",
    size: "x200",
  },
  {
    input: "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
    output: "https://cdn.shopify.com/e-jpg_100x.jpg?v=15",
    size: "100x",
  },
  {
    input:
      "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
    output:
      "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_x100.jpg?v=15",
    size: "x100",
  },
  {
    input: "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15",
    output: "https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15",
    size: "100x200",
  },
];

const replaceSize = ({
  input,
  output,
  size,
}: {
  input: string;
  output: string;
  size: string;
}) => {
  const regex = /(_(\d+x|x\d+|\d+x\d+))?\.jpg(?=(\?|$))/i;

  const modifiedUrl = input.replace(regex, `_${size}.jpg`);

  return modifiedUrl;
};

// console.log(tests.map(replaceSize));
