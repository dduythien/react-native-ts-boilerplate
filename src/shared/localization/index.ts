import LocalizedStrings from "react-native-localization";

export const translations = new LocalizedStrings({
  en: {
    noLocationService: "Location Service Not Available",
    logout: "Logout",
    yes: "Yes",
    no: "No",
    cancel: "Cancel",
    areYouSure: "Are you sure?",
    logoutDesc: "You are about to log out, confirm?",
    noInternet: "No Internet Connection",
  },
  vi: {
    noLocationService: "Không thể sử dụng tính năng này",
    logout: "Đăng xuất",
    yes: "Đồng ý",
    no: "Không",
    cancel: "Huỷ",
    areYouSure: "Thông báo",
    logoutDesc: "Tiến hành đăng xuất?",
    noInternet: "Không có kết nối internet",
  },
});

// ? Set the language manually
translations.setLanguage("vi");
