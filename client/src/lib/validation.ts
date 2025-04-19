export function validateTikTokUrl(url: string): boolean {
  // Basic validation for TikTok URLs
  // This could be enhanced with more specific regex if needed
  return url.includes("tiktok.com");
}
