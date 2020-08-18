import englishMessages from "ra-language-english";

export default {
  ...englishMessages,
  pos: {
    search: "Search",
    configuration: "Configuration",
    changePassword: "Change Password",
    language: "Language",
    cancel: "Cancel",
    confirm: "Confirm",
    reset: 'Reset',
    required: 'Required',
    theme: {
      name: "Theme",
      light: "Light",
      dark: "Dark"
    },
    dashboard: {
      monthly_revenue: "Monthly Revenue",
      new_orders: "New Orders",
      pending_reviews: "Pending Reviews",
      new_customers: "New Customers",
      pending_orders: "Pending Orders",
      order: {
        items:
          "by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items"
      },
      welcome: {
        title: "Welcome to my react-admin page",
        content: "Welcome to my manage react-admin...",
        subtitle:
          "This is the admin of an imaginary poster shop. Feel free to explore and modify the data - it's local to your computer, and will reset each time you reload.",
        aor_button: "react-admin site",
        demo_button: "Source for this demo"
      }
    },
    menu: {
      sales: "Sales",
      catalog: "Catalog",
      customers: "Customers"
    }
  },
  resources: {
    users: {
      dialogTitle: 'Change Password',
      dialogContentText: 'To change the password, please enter the old password and the password to change your your password at here, We will send the update information!',
      buttonChangePass: 'Click to change password',
      currentPassword: 'Current Password',
      newPassword: 'Password you want to change',
      verifiedNewPassword: 'Verified Password you want to change',
      errors: {
        invalidCurrentPassword: 'Invalid Current Password',
        invalidVerifiedNewPassword: 'Invalid Verified New Password'
      },
      success: {
        successChangePass: 'Success Change Password!'
      }
    },
    profile: {
      name: 'Profile',
      firstName: 'Name',
      lastName: 'Họ',
      email: 'Email',
      gender: 'Gender',
      avatar: 'Avatar',
      role: 'Role',
    },
    accounts: {
      name: 'Account',
      title: {
        list: 'List Account',
        create: 'Create Account',
        edit: 'Edit Account',
      },
      fields: {
        userName: 'User Name',
        password: 'Password',
        price: 'Price Acc',
        rank: 'Rank',
        hero: 'Hero',
        gold: 'Gold',
        skin: 'Skin',
        pearl_points: 'Pearl Points',
        thumbnail: 'Thumbnail',
        choosesThumbnail: 'Chooses Thumbnail',
        images: 'Images',
        choosesImages: 'Chooses Images',
        activated: 'Activated',
        status: 'Status'
      },
      tabs: {
        information: 'Information',
        photoIntroduction: 'Photo Introduction',
      },
    },
    genres: {
      name: "genres"
    },
    customers: {
      name: "Customer |||| Customers",
      fields: {
        commands: "Orders",
        groups: "Segments",
        last_seen_gte: "Visited Since",
        name: "Name",
        total_spent: "Total spent"
      },
      tabs: {
        identity: "Identity",
        address: "Address",
        orders: "Orders",
        reviews: "Reviews",
        stats: "Stats"
      },
      page: {
        delete: "Delete Customer"
      }
    },
    commands: {
      name: "Order |||| Orders",
      title: "Order %{reference}",
      fields: {
        basket: {
          delivery: "Delivery",
          reference: "Reference",
          quantity: "Quantity",
          sum: "Sum",
          tax_rate: "Tax Rate",
          total: "Total",
          unit_price: "Unit Price"
        },
        customer_id: "Customer",
        date_gte: "Passed Since",
        date_lte: "Passed Before",
        total_gte: "Min amount",
        status: "Status",
        returned: "Returned"
      }
    },
    invoices: {
      name: "Invoice |||| Invoices",
      fields: {
        date: "Invoice date",
        customer_id: "Customer",
        command_id: "Order",
        date_gte: "Passed Since",
        date_lte: "Passed Before",
        total_gte: "Min amount",
        address: "Address"
      }
    },
    products: {
      name: "Poster |||| Posters",
      fields: {
        category_id: "Category",
        height_gte: "Min height",
        height_lte: "Max height",
        height: "Height",
        image: "Image",
        price: "Price",
        reference: "Reference",
        stock_lte: "Low Stock",
        stock: "Stock",
        thumbnail: "Thumbnail",
        width_gte: "Min width",
        width_lte: "Max width",
        width: "Width"
      },
      tabs: {
        image: "Image",
        details: "Details",
        description: "Description",
        reviews: "Reviews"
      }
    },
    categories: {
      name: "Category |||| Categories",
      fields: {
        products: "Products"
      }
    },
    reviews: {
      name: "Review |||| Reviews",
      detail: "Review detail",
      fields: {
        customer_id: "Customer",
        command_id: "Order",
        product_id: "Product",
        date_gte: "Posted since",
        date_lte: "Posted before",
        date: "Date",
        comment: "Comment",
        rating: "Rating"
      },
      action: {
        accept: "Accept",
        reject: "Reject"
      },
      notification: {
        approved_success: "Review approved",
        approved_error: "Error: Review not approved",
        rejected_success: "Review rejected",
        rejected_error: "Error: Review not rejected"
      }
    },
    segments: {
      name: "Segments",
      fields: {
        customers: "Customers",
        name: "Name"
      },
      data: {
        compulsive: "Compulsive",
        collector: "Collector",
        ordered_once: "Ordered once",
        regular: "Regular",
        returns: "Returns",
        reviewer: "Reviewer"
      }
    }
  }
};
