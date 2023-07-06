import moment from "moment";
import { useDisplay } from "vuetify";
import { computed } from "vue";

export function useDate(date: number) {
  return { getHumanDate };
}

function getHumanDate(date: number) {
  const format = 'LL';

  return moment(date).local(true).format(format);
}

export function useAdaptive() {
  const isMobile = () => {
    return computed(() => {
      const display = useDisplay();

      return display.mobile.value;
    })
  };

  return { isMobile };
}
