import vnMessages from "ra-language-vietnamese";

export default {
  ...vnMessages,
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
  nationals: {
    vn: 'Việt Nam',
    el: 'Anh',
    cn: 'Trung Quốc',
    am: 'Mỹ',
    jp: 'Nhật Bản',
    kr: 'Hàn Quốc'
  },
  resources: {
    users: {
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
    statusProducts: {
      stock: 'Còn hàng',
      outOfStock: 'Hết hàng'
    },
    accounts: {
      name: 'Account',
      title: {
        list: 'Danh sách Account',
        create: 'Tạo Account',
        edit: 'Chỉnh sửa Account',
      },
      fields: {
        userName: 'Tên đăng nhập',
        password: 'Mật khẩu',
        price: 'Giá Acc',
        rank: 'Rank',
        hero: 'Tướng',
        gold: 'Vàng',
        skin: 'Trang phục',
        pearl_points: 'Điểm ngọc',
        thumbnail: 'Ảnh bìa của acc',
        choosesThumbnail: 'Chọn ảnh bìa của acc',
        images: 'Ảnh của acc',
        choosesImages: 'Chọn ảnh chi tiết của acc',
        activated: 'Kích hoạt',
        status: 'Trạng thái'
      },
      tabs: {
        information: 'Thông tin Account',
        photoIntroduction: 'Ảnh giới thiệu',
      },
      filter: {
        categoryId: 'Thể loại',
        imageId: 'Hình ảnh'
      }
    },
    ranks: {
      name: 'Rank',
      titles: {
        list: 'Danh sách Rank',
        create: 'Tạo Rank',
        edit: 'Chỉnh sửa Rank',
      },
      fields: {
        name: 'Rank'
      }
    },
    customers: {
      name: 'Khách hàng',
      title: {
        create: 'Tạo khách hàng',
        edit: 'Chỉnh sửa khách hàng',
        list: 'Danh sách khách hàng'
      },
      label: {
        information: 'Thông tin',
        order: 'Đơn hàng'
      },
      fields: {
        firstName: 'Họ',
        lastName: 'Tên',
        email: 'Email',
        idNumber: 'Chứng minh nhân dân',
        dob: 'Ngày sinh',
        address: 'Địa chỉ',
        city: 'Thành phố',
        order: 'Đặt hàng',
        total_spent: 'Tổng tiền',
        description: 'Nội dung',
        product: 'Sản phẩm',
        quantity: 'Số lượng',
      },
      fieldGroups: {
        identity: 'Danh tính',
        address: 'Địa chỉ sinh sống',
        order: 'Đơn đặt hàng'
      }
    },
    backgrounds: {
      name: 'Ảnh nền',
      title: {
        create: 'Tạo Ảnh nền',
        edit: 'Chỉnh sửa Ảnh nền',
        list: 'Danh sách Ảnh nền'
      },
      fields: {
        backGroundBig: 'Ảnh nền lớn',
        choosesBackGroundBig: 'Chọn ảnh nền lớn',
        backGroundSmall: 'Ảnh nền nhỏ',
        choosesBackGroundSmall: 'Chọn ảnh nền nhỏ'
      }
    }
  }
};
