const marked = require("marked");
const sanitizeHTMLLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  // step 1: convert markdown content to HTML content
  const convertedHTMLContent = marked.parse(markdownContent);

  // step 2: sanitize HTML content
  const sanitizedHTMLContent = sanitizeHTMLLibrary(convertedHTMLContent, {
    allowedTags: sanitizeHTMLLibrary.defaults.allowedTags.concat("img"),
  });

  // step 3: convert sanitized HTML content back to markdown content
  const turndownService = new TurndownService();
  const sanitizedMarkdown = turndownService.turndown(sanitizedHTMLContent);
  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
