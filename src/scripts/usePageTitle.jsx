import { useEffect } from 'react';

const usePageTitle = (name) => {
  useEffect(() => {
    document.title = `Hideout ✯ ${name}`;
  }, [name]); // Re-run when 'name' changes
};

export default usePageTitle;

// HIÐΞØƲT
// h -
// i -
// d - Ð
// e - Ξ Ɛ Ʃ
// o - ɸ Φ Ø Ɵ
// u - Ĳ Ʋ
// t -

// »
