# Các loại Widget trong CloudWatch Dashboard

## Tổng quan

CloudWatch Dashboard của Viettel IDC cung cấp nhiều loại widget khác nhau để hiển thị dữ liệu giám sát một cách trực quan và hiệu quả. Mỗi loại widget phù hợp với các mục đích và loại dữ liệu khác nhau.

## 📊 Line Chart Widget

### Mô tả

Line Chart là loại widget phổ biến nhất, hiển thị dữ liệu theo thời gian dưới dạng đường biểu đồ. Phù hợp cho việc theo dõi xu hướng và biến động của metrics.

### Use Cases

- **CPU Utilization**: Theo dõi mức sử dụng CPU theo thời gian
- **Memory Usage**: Giám sát bộ nhớ sử dụng
- **Network Traffic**: Lưu lượng mạng in/out
- **Response Time**: Thời gian phản hồi của ứng dụng
- **Error Rate**: Tỷ lệ lỗi theo thời gian

### Cấu hình

```json
{
  "type": "line_chart",
  "title": "CPU Utilization Over Time",
  "metrics": [
    {
      "namespace": "AWS/EC2",
      "metric_name": "CPUUtilization",
      "dimensions": { "InstanceId": "i-1234567890abcdef0" },
      "statistic": "Average"
    }
  ],
  "time_range": "6h",
  "y_axis": {
    "min": 0,
    "max": 100,
    "unit": "Percent"
  },
  "line_style": {
    "width": 2,
    "type": "solid",
    "color": "#1f77b4"
  }
}
```

### Tùy chọn nâng cao

- **Multiple Lines**: Hiển thị nhiều metrics trên cùng biểu đồ
- **Stacked Area**: Chồng các area lên nhau
- **Threshold Lines**: Đường ngưỡng cảnh báo
- **Annotations**: Ghi chú sự kiện quan trọng

## 📈 Bar Chart Widget

### Mô tả

Bar Chart hiển thị dữ liệu dưới dạng cột, phù hợp để so sánh giá trị giữa các categories hoặc time periods.

### Use Cases

- **Resource Usage by Instance**: So sánh tài nguyên giữa các server
- **Request Count by Endpoint**: Số lượng request theo API endpoint
- **Error Count by Type**: Phân loại lỗi theo loại
- **Storage Usage by Volume**: Dung lượng sử dụng theo ổ đĩa

### Cấu hình

```json
{
  "type": "bar_chart",
  "title": "Memory Usage by Instance",
  "metrics": [
    {
      "namespace": "CWAgent",
      "metric_name": "mem_used_percent",
      "dimensions": {
        "InstanceId": ["i-123", "i-456", "i-789"]
      },
      "statistic": "Average"
    }
  ],
  "orientation": "vertical",
  "color_scheme": "category10",
  "show_values": true
}
```

### Tùy chọn

- **Orientation**: Vertical/Horizontal bars
- **Stacking**: Normal, Percent stacking
- **Grouping**: Group by dimensions
- **Sorting**: Ascending/Descending

## 🥧 Pie Chart Widget

### Mô tả

Pie Chart hiển thị tỷ lệ phần trăm của các thành phần trong tổng thể, phù hợp để thể hiện phân bố dữ liệu.

### Use Cases

- **Storage Distribution**: Phân bố dung lượng theo loại
- **Traffic by Source**: Lưu lượng theo nguồn
- **Cost by Service**: Chi phí theo dịch vụ
- **Error Distribution**: Phân bố lỗi theo severity

### Cấu hình

```json
{
  "type": "pie_chart",
  "title": "Storage Usage Distribution",
  "metrics": [
    {
      "namespace": "AWS/EBS",
      "metric_name": "VolumeReadBytes",
      "dimensions": {
        "VolumeId": ["vol-123", "vol-456", "vol-789"]
      }
    }
  ],
  "show_legend": true,
  "show_percentages": true,
  "donut_mode": false
}
```

### Tùy chọn

- **Donut Mode**: Hiển thị dạng donut thay vì pie
- **Legend Position**: Top, Bottom, Left, Right
- **Label Format**: Values, Percentages, Both
- **Color Palette**: Custom color schemes

## 🎯 Gauge Widget

### Mô tả

Gauge Widget hiển thị giá trị hiện tại dưới dạng đồng hồ đo, với các ngưỡng màu sắc để cảnh báo.

### Use Cases

- **Current Load**: Load average hiện tại
- **Disk Usage**: Phần trăm disk sử dụng
- **Connection Pool**: Số connection đang sử dụng
- **Queue Depth**: Độ sâu hàng đợi

### Cấu hình

```json
{
  "type": "gauge",
  "title": "Current CPU Load",
  "metric": {
    "namespace": "CWAgent",
    "metric_name": "cpu_usage_active",
    "statistic": "Average"
  },
  "min_value": 0,
  "max_value": 100,
  "unit": "Percent",
  "thresholds": [
    { "value": 70, "color": "yellow", "label": "Warning" },
    { "value": 90, "color": "red", "label": "Critical" }
  ],
  "show_value": true,
  "show_unit": true
}
```

### Tùy chọn

- **Gauge Style**: Arc, Full circle, Linear
- **Threshold Bands**: Color bands for ranges
- **Needle Style**: Different needle designs
- **Value Display**: Show/hide current value

## 🔢 Number Widget

### Mô tả

Number Widget hiển thị một giá trị số đơn giản với formatting và màu sắc tùy chỉnh.

### Use Cases

- **Total Requests**: Tổng số request
- **Active Users**: Số user đang online
- **Available Memory**: Bộ nhớ còn trống
- **Uptime**: Thời gian hoạt động

### Cấu hình

```json
{
  "type": "number",
  "title": "Active Connections",
  "metric": {
    "namespace": "AWS/ApplicationELB",
    "metric_name": "ActiveConnectionCount",
    "statistic": "Sum"
  },
  "format": {
    "decimal_places": 0,
    "unit": "connections",
    "prefix": "",
    "suffix": ""
  },
  "color_rules": [
    { "condition": "value > 1000", "color": "red" },
    { "condition": "value > 500", "color": "yellow" },
    { "condition": "value <= 500", "color": "green" }
  ]
}
```

### Tùy chỉnh

- **Number Formatting**: Decimal places, separators
- **Units**: Custom units and prefixes
- **Color Rules**: Conditional coloring
- **Font Size**: Adjustable text size

## 📝 Text Widget

### Mô tả

Text Widget cho phép thêm văn bản, markdown, hoặc HTML để cung cấp context và documentation.

### Use Cases

- **Dashboard Description**: Mô tả mục đích dashboard
- **Alert Instructions**: Hướng dẫn xử lý cảnh báo
- **Contact Information**: Thông tin liên hệ
- **Links**: Liên kết đến tài liệu khác

### Cấu hình

```json
{
  "type": "text",
  "title": "Dashboard Information",
  "content": {
    "format": "markdown",
    "text": "# Production Monitoring\n\nThis dashboard monitors our production environment.\n\n## Key Metrics\n- CPU Usage\n- Memory Usage\n- Network Traffic\n\n**Contact**: ops-team@company.com"
  },
  "style": {
    "background_color": "#f8f9fa",
    "text_color": "#333333",
    "font_family": "Arial, sans-serif"
  }
}
```

### Định dạng

- **Markdown**: Full markdown support
- **HTML**: Rich HTML formatting
- **Plain Text**: Simple text display
- **Links**: Clickable links

## 📊 Table Widget

### Mô tả

Table Widget hiển thị dữ liệu dưới dạng bảng, phù hợp cho việc hiển thị nhiều metrics cùng lúc.

### Use Cases

- **Instance Status**: Trạng thái các server
- **Top Errors**: Top lỗi phổ biến
- **Resource Summary**: Tóm tắt tài nguyên
- **Performance Metrics**: Bảng metrics hiệu năng

### Cấu hình

```json
{
  "type": "table",
  "title": "Instance Performance Summary",
  "columns": [
    {
      "name": "Instance ID",
      "metric": "dimension.InstanceId",
      "width": "150px"
    },
    {
      "name": "CPU %",
      "metric": "AWS/EC2.CPUUtilization",
      "format": "percentage",
      "color_rules": [
        { "condition": "> 90", "color": "red" },
        { "condition": "> 70", "color": "yellow" }
      ]
    },
    {
      "name": "Memory %",
      "metric": "CWAgent.mem_used_percent",
      "format": "percentage"
    }
  ],
  "sorting": {
    "column": "CPU %",
    "direction": "desc"
  },
  "pagination": {
    "enabled": true,
    "page_size": 10
  }
}
```

## 🗺️ Heatmap Widget

### Mô tả

Heatmap hiển thị dữ liệu dưới dạng ma trận màu sắc, phù hợp để thể hiện mật độ hoặc intensity.

### Use Cases

- **Request Patterns**: Mẫu request theo thời gian
- **Error Hotspots**: Điểm nóng lỗi
- **Geographic Distribution**: Phân bố địa lý
- **Performance Matrix**: Ma trận hiệu năng

### Cấu hình

```json
{
  "type": "heatmap",
  "title": "Request Heatmap by Hour",
  "metrics": [
    {
      "namespace": "AWS/ApplicationELB",
      "metric_name": "RequestCount",
      "dimensions": { "LoadBalancer": "my-load-balancer" }
    }
  ],
  "x_axis": "time",
  "y_axis": "hour_of_day",
  "color_scale": {
    "type": "linear",
    "colors": ["#ffffff", "#ff0000"],
    "min": 0,
    "max": 1000
  }
}
```

## 📈 Sparkline Widget

### Mô tả

Sparkline là biểu đồ đường nhỏ gọn, thường được sử dụng trong bảng hoặc kết hợp với số liệu.

### Use Cases

- **Trend Indicators**: Chỉ báo xu hướng
- **Mini Charts**: Biểu đồ nhỏ trong dashboard
- **Quick Overview**: Tổng quan nhanh
- **Embedded Metrics**: Metrics nhúng trong text

### Cấu hình

```json
{
  "type": "sparkline",
  "title": "CPU Trend",
  "metric": {
    "namespace": "AWS/EC2",
    "metric_name": "CPUUtilization",
    "statistic": "Average"
  },
  "time_range": "1h",
  "height": 30,
  "show_last_value": true,
  "color": "#1f77b4"
}
```

## Widget Selection Guide

### 📋 Chọn Widget phù hợp

| Mục đích              | Widget Type  | Lý do                                |
| --------------------- | ------------ | ------------------------------------ |
| **Theo dõi xu hướng** | Line Chart   | Hiển thị biến động theo thời gian    |
| **So sánh giá trị**   | Bar Chart    | Dễ so sánh giữa các categories       |
| **Phân bố tỷ lệ**     | Pie Chart    | Thể hiện phần trăm trong tổng thể    |
| **Giá trị hiện tại**  | Gauge/Number | Focus vào giá trị real-time          |
| **Thông tin bổ sung** | Text         | Cung cấp context và hướng dẫn        |
| **Nhiều metrics**     | Table        | Hiển thị nhiều thông tin cùng lúc    |
| **Mật độ dữ liệu**    | Heatmap      | Thể hiện intensity và patterns       |
| **Xu hướng nhanh**    | Sparkline    | Tổng quan trend trong không gian nhỏ |

### 🎨 Best Practices

#### Layout Design

1. **Hierarchy**: Đặt metrics quan trọng ở vị trí nổi bật
2. **Grouping**: Nhóm widgets liên quan gần nhau
3. **Consistency**: Sử dụng màu sắc và style nhất quán
4. **Responsive**: Đảm bảo hiển thị tốt trên mọi thiết bị

#### Performance

1. **Limit Widgets**: Không quá 20 widgets/dashboard
2. **Optimize Queries**: Sử dụng aggregation phù hợp
3. **Reasonable Refresh**: Cân bằng real-time vs performance
4. **Time Range**: Chọn khoảng thời gian hợp lý

#### User Experience

1. **Clear Titles**: Tên widget mô tả rõ ràng
2. **Meaningful Colors**: Màu sắc có ý nghĩa (đỏ = nguy hiểm)
3. **Appropriate Scale**: Thang đo phù hợp với dữ liệu
4. **Context**: Cung cấp đủ thông tin để hiểu metrics

## Liên hệ hỗ trợ

- **Documentation**: [CloudWatch Guide](../cloudwatch.md)
- **Dashboard Creation**: [Create Dashboard](create-dashboard.md)
- **Support**: support@viettelidc.com.vn
- **Hotline**: 1900 8000
