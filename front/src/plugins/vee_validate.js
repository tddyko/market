import Vue from "vue";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import { max, required, regex, confirmed } from "vee-validate/dist/rules";

extend("max", {
  ...max,
  message: `{length}자 미만으로 입력해주세요`,
});
extend("regx", {
  ...regex,
  message: `{_field_} 형식으로 입력하세요`,
});
extend("confirmed", {
  ...confirmed,
  message: `비밀번호가 동일하지 않습니다.`,
});
extend("required", {
  ...required,
  message: `필수값입니다.`,
});
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
