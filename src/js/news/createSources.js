import { makeSelectSources } from "../ui/selectSources";

export const createSources = sourcesNewsInstance => {
  sourcesNewsInstance.getSources().then(source => {
    makeSelectSources(source);
  });
};
