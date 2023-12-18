# It will install all packages

yarn

# Will start the dev server

yarn dev

# Documentation

https://demos.pixinvent.com/vuexy-nextjs-admin-template/documentation/guide/

# Cấu trúc thư mục

```reactjs
├── public
│   ├── images                   -> Nội dung tĩnh
│   ├── locales                  -> Bản dịch
│   └── other files
├── src
│   ├── @core                    -> Tệp lõi của mẫu (hạn chế sửa)
│   ├── @fake-db                 -> Cơ sở dữ liệu fake
│   ├── assets                   -> Xem các tệp hiển thị tất cả các trang
│   │   ├── icons                -> icon svg components
│   │   └── images               -> images svg components
│   ├── configs                  -> Tệp cấu hình
│   │   ├── acl.ts               -> Tệp/cấu hình Kiểm soát truy cập của bạn
│   │   ├── auth.ts              -> Tệp/cấu hình xác thực
│   │   ├── i18n.ts              -> cấu hình và khởi tạo i18n
│   │   └── themeConfig.ts       -> Cấu hình mẫu
│   ├── constants                -> Lưu trữ các giá trị cố định và hằng số
│   ├── context                  -> Tệp ngữ cảnh của bạn ở đây
│   ├── hooks                    -> Móc của bạn vào đây
│   ├── layouts                  -> Bố cục của bạn
│   │   ├── components           -> Thành phần của bạn, thành phần bố cục
│   │   ├── UserLayout.tsx       -> Tệp chịu trách nhiệm hiển thị bố cục & mẫu
│   │   └── UserThemeOptions.ts  -> Tệp chủ đề của bạn để ghi đè chủ đề @core
│   ├── models                   -> Lưu trữ các định nghĩa liên quan đến dữ liệu và logic xử lý dữ liệu
│   ├── navigation               -> Tệp menu điều hướng tĩnh dọc & ngang
│   │   ├── horizontal           -> Tệp menu ngang
│   │   └── vertical             -> Tệp menu dọc
│   ├── pages                    -> Xem tệp hiển thị tất cả các trang
│   │   ├── _app.tsx             -> Tệp chính chịu trách nhiệm hiển thị bố cục
│   │   ├── _document.tsx        -> Cấu hình tài liệu HTML và cảm xúc
│   │   └── index.tsx            -> Tệp nhập ứng dụng
│   ├── store                    -> Redux store
│   ├── types                    -> Tất cả các loại
│   ├── utils                    -> Thư mục này dùng để lưu trữ tất cả các chức năng tiện ích như: validation, storage, format, api,...
│   └── views                    -> Xem các tập tin có trong thư mục trang
├── styles                       -> Global styling
├── .env                         -> Tệp môi trường
├── .eslintrc.json               -> Cấu hình ESLint (Mã Linting)
├── .gitignore                   -> gitignore (bỏ qua file và thư mục để đồng bộ với repo)
├── .npmrc                       -> Tệp cấu hình node
├── .nvmrc                       -> file cấu hình nvm
├── .prettierrc.js               -> Cấu hình Prettier (định dạng mã trình soạn thảo)
├── next.config.js               -> Cấu hình Next js
├── next.d.ts                    -> Cấu hình loại Next js global
├── package.json                 -> All the dependencies require to run the template
├── tsconfig.json                -> Cấu hình TypeScript
```
