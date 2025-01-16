export default function useFormatText(text: string) {
  const textFormated = text.length > 61 ? text.substring(0, 47) + "..." : text;
  return textFormated;
}
