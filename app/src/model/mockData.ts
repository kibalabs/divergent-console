import { Domain } from './domain';
import { Link } from './link';

export const DOMAINS: Domain[] = [
  new Domain('1', 'johnsmith.com', true),
  new Domain('2', 'links.johnsmith.com', true),
  new Domain('3', 'cool.johnsmith.com', false),
];

export const DOMAIN_ID_MAP: Record<string, Domain> = DOMAINS.reduce((accumulator: Record<string, Domain>, currentValue: Domain): Record<string, Domain> => {
  accumulator[currentValue.domainId] = currentValue;
  return accumulator;
}, {});

export const LINKS: Link[] = [
  new Link('1', '1', '*', 'https://www.johnsmith.com', true),
  new Link('2', '2', 'twitter', 'https://www.twitter.com/johnsmith', true),
  new Link('3', '2', 'facebook', 'https://www.facebook.com/johnsmith', false),
  new Link('4', '2', 'instagram', 'https://www.instagram.com/johnsmith', true),
  new Link('5', '2', 'cool-link-5', 'https://www.coollinks.com/5', true),
  new Link('6', '2', 'cool-link-6', 'https://www.coollinks.com/6', true),
  new Link('7', '2', 'cool-link-7', 'https://www.coollinks.com/7', true),
  new Link('8', '2', 'cool-link-8', 'https://www.coollinks.com/8', true),
  new Link('9', '2', 'cool-link-9', 'https://www.coollinks.com/9', true),
  new Link('10', '2', 'cool-link-10', 'https://www.coollinks.com/10', true),
  new Link('11', '2', 'cool-link-11', 'https://www.coollinks.com/11', true),
  new Link('12', '2', 'cool-link-12', 'https://www.coollinks.com/12', true),
  new Link('13', '2', 'cool-link-13', 'https://www.coollinks.com/13', true),
  new Link('5', '2', 'cool', 'https://www.google.com', true),
  new Link('6', '3', 'lame', 'https://www.facebook.com', false),
];

export const LINK_ID_MAP: Record<string, Link> = LINKS.reduce((accumulator: Record<string, Link>, currentValue: Link): Record<string, Link> => {
  accumulator[currentValue.linkId] = currentValue;
  return accumulator;
}, {});

export const DOMAIN_ID_LINKS_MAP: Record<string, Link[]> = {
  1: [
    LINK_ID_MAP['1'],
  ],
  2: [
    LINK_ID_MAP['2'],
    LINK_ID_MAP['3'],
    LINK_ID_MAP['4'],
    LINK_ID_MAP['5'],
    LINK_ID_MAP['6'],
    LINK_ID_MAP['7'],
    LINK_ID_MAP['8'],
    LINK_ID_MAP['9'],
    LINK_ID_MAP['10'],
    LINK_ID_MAP['11'],
    LINK_ID_MAP['12'],
    LINK_ID_MAP['13'],
  ],
  3: [
    LINK_ID_MAP['5'],
    LINK_ID_MAP['6'],
  ],
};
