export const GOOGLE_ANALYTICS_ID: string = process.env.GOOGLE_ANALYTICS_ID || ''

export const pageview = (url: string): void=> {
  window.gtag('config', GOOGLE_ANALYTICS_ID, {
    page_path: url,
  })
}

type TTagProps = {
  action: string;
  category: string;
  label: string;
  value: string;
}

export const event = ({ action, category, label, value }: TTagProps): void => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
