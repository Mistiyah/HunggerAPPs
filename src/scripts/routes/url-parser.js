const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this._urlSplitter(url);
    const combinedUrl = this._urlCombiner(splitedUrl);
    return combinedUrl;
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splittedUrl = this._urlSplitter(url);
    return splittedUrl;
  },

  _urlSplitter(url) {
    const urlsSplits = url.split("/");
    const result = {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
    return result;
  },

  _urlCombiner(splitedUrl) {
    const combined = (splitedUrl.resource ? `/${splitedUrl.resource}` : "/") + (splitedUrl.id ? `/${splitedUrl.id}` : "") + (splitedUrl.verb ? `/${splitedUrl.verb}` : "");
    return combined;
  },
};

export default UrlParser;
