import raVn from './ra-vn';

export default {
  ...raVn,
  pos: {
    search: "Tìm kiếm",
    configuration: "Cấu hình",
    profile: 'Hồ sơ',
    password: "Mật khẩu",
    changePassword: "Đổi mật khẩu",
    passwordSettingTitle: "Bạn có chắc chắn muốn thay đổi mật khẩu ? ",
    passwordSettingContent: "Nếu chắc chắn, xin hãy nhập kỹ mật khẩu cần thay đổi !",
    forgetPass: "Quên mật khẩu",
    forgetPassSetting: "Bạn bị quên hoặc mất mật khẩu ? ",
    sendMailInfo: "Nhận mã từ mail",
    sendPhoneInfo: "Nhận mã từ số điện thoại",
    cancel: "Hủy",
    confirm: "Xác nhận",
    reset: 'Reset',
    required: 'Bắt buộc nhập',
    language: "Ngôn ngữ",
    theme: {
      name: "Màu nền",
      light: "Sáng",
      dark: "Tối"
    },
    dashboard: {
      welcome: {
        title: "Chào mừng đến với trang của tôi",
        content: "Chào mừng đến với trang quản lý...",
        subtitle: "Phụ đề",
        aor_button: "Site web de react-admin",
        demo_button: "Code source de cette démo"
      }
    },
    menu: {
      users: 'Quản lí',
      products: 'Sản phẩm',
      sales: "Bán hàng",
      catalog: "Catalogue",
      customers: "Clients",
      backgrounds: 'Ảnh nền'
    },
    notFound: {
      title: "Không tìm thấy",
      content: "Không tìm thấy trang bạn cần tìm"
    }
  },
  resources: {
    users: {
      name: 'Người dùng',
      title: {
        edit: 'Chỉnh sửa người dùng',
      },
      fields: {
        firstName: 'Họ',
        lastName: 'Tên',
        gender: 'Giới tính',
        permissions: 'Quyền truy cập'
      },
      dialogTitle: 'Đổi mật khẩu',
      dialogContentText: 'Để đổi mật khẩu, vui lòng nhập mật khẩu cũ và mật khẩu muốn đổi của bạn tại đây, Chúng tôi sẽ gửi thông tin cập nhật!',
      buttonChangePass: 'Nhấn vào để đổi mật khẩu',
      currentPassword: 'Mật khẩu hiện tại',
      newPassword: 'Mật khẩu muốn đổi',
      verifiedNewPassword: 'Xác nhận mật khẩu mới',
      errors: {
        invalidCurrentPassword: 'Mật khẩu hiện tại không đúng',
        invalidVerifiedNewPassword: 'Xác nhận mật khẩu không trùng khớp'
      },
      success: {
        successChangePass: 'Thay đổi mật khẩu thành công!'
      },
      permissions: {
        admin: 'ADMIN',
        operator: 'OPERATOR',
        user: 'USER'
      },
      genders: {
        male: 'Nam',
        female: 'Nữ',
        unknown: 'Không xác định'
      }
    },
    profile: {
      name: 'Hồ sơ',
      firstName: 'Tên',
      lastName: 'Họ',
      email: 'Email',
      gender: 'Giới tính',
      avatar: 'Avatar',
      role: 'Quyền',
    },
    products: {
      name: 'Sản phẩm',
      title: {
        list: 'Danh sách Sản phẩm',
        create: 'Tạo Sản phẩm',
        edit: 'Chỉnh sửa Sản phẩm',
      },
      fields: {
        name: 'Tên sản phẩm',
        smells: 'Hương vị',
        gifts: 'Quà tặng kèm',
        price: 'Giá tiền',
        weight: 'Trọng lượng',
        productType: 'Loại sản phẩm',
        quantity: 'Số lượng',
        status: 'Trạng thái',
        activated: 'Hoạt động'
      },
    },
    productTypes: {
      name: 'Loại sản phẩm',
      fields: {
        name: 'Loại sản phẩm',
        activated: 'Hoạt động',
      }
    },
    smells: {
      name: 'Hương vị',
      fields: {
        name: 'Tên hương vị',
        activated: 'Trạng thái'
      }
    },
    gifts: {
      name: 'Quà tặng kèm',
      fields: {
        name: 'Tên quà tặng kèm',
        activated: 'Trạng thái'
      }
    }
  }
};
