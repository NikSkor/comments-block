import {createElement} from "./utils/createElement";

export const createComment = (store) => {
let li = createElement(
  'li',
  {
    className: 'comments__item',
    id: store.id,
  },
);

createElement(
  'p',
  {
    className: 'comments__name',
    textContent: store.name,
  },
  {
    parent: li,
  }
);

createElement(
  'p',
  {
    className: 'comments__text',
    textContent: store.text,
  },
  {
    parent: li,
  }
);

createElement(
  'span',
  {
    className: 'comments__date',
  },
  {
    parent: li,
  }
);

let like = createElement(
  'div',
  {
    className: 'comments__like',
  },
  {
    parent: li,
    append: createElement('a', {
      className: `comments__link ${(store.isLike === true) ? 'comments__link_active' : ''}`,
      href: '#',
      innerHTML: `
        <svg
          width='22'
          height='20'
          viewBox='0 0 22 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
        <path
          d='M11 18.25C11 18.25 1.625 13 1.625 6.62501C1.62519 5.49826 2.01561 4.40635 2.72989 3.53493C3.44416 2.66351 4.4382 2.06636 5.54299 1.84501C6.64778 1.62367 7.79514 1.79179 8.78999 2.32079C9.78484 2.84979 10.5658 3.70702 11 4.74673L11 4.74673C11.4342 3.70702 12.2152 2.84979 13.21 2.32079C14.2049 1.79179 15.3522 1.62367 16.457 1.84501C17.5618 2.06636 18.5558 2.66351 19.2701 3.53493C19.9844 4.40635 20.3748 5.49826 20.375 6.62501C20.375 13 11 18.25 11 18.25Z'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        </svg>
      `,
    }),
  }
);

createElement(
  'div',
  {
    className: 'comments__delete',
  },
  {
    parent: li,
    append: createElement('a', {
      className: 'comments__link',
      href: '#',
      innerHTML: `
        <svg
          width='24'
          height='24'
          stroke='currentColor'
          version='1.1'
          viewBox='0 0 24 24'
          width='100%'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Icon'>
            <path d='M4.251,9.031c-0,0 0.194,4.655 0.34,8.167c0.106,2.544 2.199,4.552 4.746,4.552c1.68,0 3.646,0 5.326,0c2.547,0 4.64,-2.008 4.746,-4.552c0.146,-3.512 0.34,-8.167 0.34,-8.167c0.018,-0.413 -0.304,-0.763 -0.718,-0.78c-0.413,-0.018 -0.763,0.304 -0.78,0.718c-0,-0 -0.194,4.655 -0.341,8.166c-0.072,1.741 -1.505,3.115 -3.247,3.115c-1.68,0 -3.646,0 -5.326,-0c-1.742,0 -3.175,-1.374 -3.247,-3.115c-0.147,-3.511 -0.341,-8.166 -0.341,-8.166c-0.017,-0.414 -0.367,-0.736 -0.78,-0.718c-0.414,0.017 -0.736,0.367 -0.718,0.78Z' />
            <path d='M7.459,5.25l0.374,-1.12c0.374,-1.123 1.425,-1.88 2.609,-1.88c0.944,0 2.172,0 3.116,0c1.184,-0 2.235,0.757 2.609,1.88l0.374,1.12l3.459,0c0.414,-0 0.75,0.336 0.75,0.75c0,0.414 -0.336,0.75 -0.75,0.75l-16,0c-0.414,-0 -0.75,-0.336 -0.75,-0.75c0,-0.414 0.336,-0.75 0.75,-0.75l3.459,0Zm7.5,0l-0.215,-0.645c-0.17,-0.511 -0.647,-0.855 -1.186,-0.855c-0.944,-0 -2.172,-0 -3.116,0c-0.539,-0 -1.016,0.344 -1.186,0.855l-0.215,0.645l5.918,0Z' />
          </g>
        </svg>
      `,
    }),
  }
);

  return li;
};