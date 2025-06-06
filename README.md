<p align="center">
  <img alt="Viettel IDC Cloud Documentation" src="./docs/_media/icon.svg" width="120">
</p>

<p align="center">
  <h1>📚 Viettel IDC Cloud Documentation</h1>
</p>

<p align="center">
  <strong>Tài liệu hướng dẫn sử dụng dịch vụ Cloud của Viettel IDC</strong>
</p>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square">
  <img alt="Status" src="https://img.shields.io/badge/status-active-green.svg?style=flat-square">
  <img alt="Language" src="https://img.shields.io/badge/language-Vietnamese-red.svg?style=flat-square">
  <img alt="Platform" src="https://img.shields.io/badge/platform-Viettel_IDC-orange.svg?style=flat-square">
</p>

---

Chào mừng bạn đến với **repository tài liệu chính thức** của dịch vụ Cloud Viettel IDC. Repository này chứa toàn bộ tài liệu hướng dẫn, API documentation, và best practices để sử dụng các dịch vụ Cloud một cách hiệu quả.

## 🚀 Về dự án

Repository này được xây dựng bằng **Docsify** - một static site generator mạnh mẽ, cung cấp:

- ✅ **Không cần build**: Tài liệu được render trực tiếp từ Markdown
- ✅ **Tìm kiếm thông minh**: Full-text search với plugin tích hợp
- ✅ **Responsive design**: Tối ưu cho mọi thiết bị
- ✅ **Đa ngôn ngữ**: Hỗ trợ tiếng Việt hoàn chỉnh
- ✅ **Cập nhật real-time**: Thay đổi hiển thị ngay lập tức
- ✅ **SEO friendly**: Tối ưu cho công cụ tìm kiếm

## 📖 Nội dung tài liệu

### Dịch vụ Cloud chính
- **vServer**: Máy chủ ảo (VPS) linh hoạt và mạnh mẽ
- **vStorage**: Lưu trữ đám mây an toàn, mở rộng không giới hạn
- **vContainer**: Nền tảng container hóa hiện đại
- **vDatabase**: Cơ sở dữ liệu đám mây được quản lý
- **vMonitoring**: Giám sát hệ thống 24/7
- **vKubernetes**: Orchestration platform cho container

### Hướng dẫn chi tiết
- 📋 **Hướng dẫn cơ bản**: Đăng ký, quản lý tài khoản, thanh toán
- ⚙️ **Hướng dẫn kỹ thuật**: API, CLI, SDK, best practices
- 🔧 **Triển khai**: Deployment, monitoring, backup, security

## 🌐 Truy cập tài liệu

### Online Documentation
Truy cập tài liệu trực tuyến tại: **[Viettel IDC Cloud Docs](https://idist-hn.github.io/docsify/)**

### Local Development

Để chạy tài liệu trên máy local:

```bash
# Clone repository
git clone https://github.com/idist-hn/docsify.git
cd docsify

# Cài đặt docsify-cli (nếu chưa có)
npm install -g docsify-cli

# Chạy local server
docsify serve docs

# Truy cập http://localhost:3000
```

### Docker (Alternative)

```bash
# Sử dụng Docker để chạy
docker run -it --rm \
  -v $(pwd)/docs:/usr/local/docsify \
  -p 3000:3000 \
  node:alpine \
  npx docsify-cli serve /usr/local/docsify
```

## 📁 Cấu trúc thư mục

```
docs/
├── README.md              # Trang chủ tài liệu
├── introduction.md        # Giới thiệu Viettel IDC Cloud
├── support.md            # Hỗ trợ khách hàng
├── cloud/                # Tài liệu dịch vụ Cloud
│   ├── overview.md       # Tổng quan
│   ├── vserver.md        # vServer documentation
│   ├── vstorage.md       # vStorage documentation
│   ├── vcontainer.md     # vContainer documentation
│   ├── vdbs.md          # vDatabase documentation
│   ├── cloudwatch.md    # vMonitoring documentation
│   └── voks.md          # vKubernetes documentation
├── guides/               # Hướng dẫn chi tiết
│   ├── registration.md  # Đăng ký tài khoản
│   ├── api.md           # API Documentation
│   ├── cli.md           # CLI Tools
│   └── best-practices.md # Best Practices
├── _sidebar.md          # Menu sidebar
├── _navbar.md           # Navigation bar
├── _coverpage.md        # Cover page
└── index.html           # Docsify config
```

## 🔗 Liên kết quan trọng

- 🌐 **Portal**: [portal.viettelidc.com.vn](https://portal.viettelidc.com.vn)
- 📞 **Hotline**: 1900 8000 (24/7, miễn phí)
- 📧 **Email**: support@viettelidc.com.vn
- 💬 **Forum**: [forum.viettelidc.com.vn](https://forum.viettelidc.com.vn)
- 📱 **Mobile App**: [iOS](https://apps.apple.com/vn/app/viettel-idc) | [Android](https://play.google.com/store/apps/details?id=vn.viettelidc)

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp để cải thiện tài liệu này:

### Cách đóng góp
1. **Fork** repository này
2. **Tạo branch** mới: `git checkout -b feature/improvement`
3. **Commit** thay đổi: `git commit -m 'Add some improvement'`
4. **Push** lên branch: `git push origin feature/improvement`
5. **Tạo Pull Request**

### Quy tắc đóng góp
- ✅ Sử dụng tiếng Việt cho nội dung chính
- ✅ Tuân thủ format Markdown chuẩn
- ✅ Kiểm tra chính tả và ngữ pháp
- ✅ Thêm ví dụ minh họa khi cần thiết
- ✅ Cập nhật sidebar và navbar nếu thêm trang mới

### Báo lỗi
Nếu phát hiện lỗi trong tài liệu, vui lòng:
- Tạo [Issue](https://github.com/idist-hn/docsify/issues) mới
- Mô tả chi tiết vấn đề
- Đính kèm screenshot nếu có

## 📊 Thống kê

- **Tổng số trang**: 20+ trang tài liệu
- **Ngôn ngữ chính**: Tiếng Việt
- **Cập nhật**: Hàng tháng
- **Phiên bản**: 1.0.0

## 📝 Changelog

### v1.0.0 (Tháng 12/2024)
- ✅ Khởi tạo repository tài liệu
- ✅ Thêm tài liệu cơ bản cho các dịch vụ Cloud
- ✅ Thiết lập Docsify với theme tùy chỉnh
- ✅ Tạo cấu trúc navigation và sidebar
- ✅ Thêm hướng dẫn đăng ký và sử dụng

## 📄 Bản quyền

© 2024 **Viettel IDC**. Tất cả các quyền được bảo lưu.

Tài liệu này được cung cấp cho mục đích hướng dẫn sử dụng dịch vụ và không được phép sao chép, phân phối mà không có sự đồng ý bằng văn bản từ Viettel IDC.

---

<p align="center">
  <strong>🌟 Nếu tài liệu này hữu ích, hãy cho chúng tôi một Star! ⭐</strong>
</p>
