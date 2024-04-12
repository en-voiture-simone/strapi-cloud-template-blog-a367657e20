import type { Schema, Attribute } from '@strapi/strapi';

export interface ComposantsBlocArguments extends Schema.Component {
  collectionName: 'components_composants_bloc_arguments';
  info: {
    displayName: 'BlocArguments';
    icon: 'th-list';
  };
  attributes: {
    texte: Attribute.RichText;
    item: Attribute.Component<'composants.titre-texte-image-lien', true>;
    cta: Attribute.Component<'composants.cta'>;
    groupe: Attribute.Relation<
      'composants.bloc-arguments',
      'oneToOne',
      'api::groupe.groupe'
    >;
    css: Attribute.Relation<
      'composants.bloc-arguments',
      'oneToMany',
      'api::css.css'
    >;
  };
}

export interface ComposantsBlocBvmBva extends Schema.Component {
  collectionName: 'components_composants_bloc_bvm_bva';
  info: {
    displayName: 'BlocBVMBVA';
    icon: 'money-check';
  };
  attributes: {
    titre: Attribute.String;
    titleType: Attribute.Enumeration<
      ['noTitle', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    > &
      Attribute.DefaultTo<'h3'>;
    toggle: Attribute.Component<'composants.toggle'>;
    item: Attribute.Component<'composants.titre-texte-image-lien', true>;
    imageBVM: Attribute.Media;
    imageAltBVM: Attribute.String;
    imageBVA: Attribute.Media;
    imageAltBVA: Attribute.String;
    css: Attribute.Relation<
      'composants.bloc-bvm-bva',
      'oneToMany',
      'api::css.css'
    >;
  };
}

export interface ComposantsBlocDepartements extends Schema.Component {
  collectionName: 'components_composants_bloc_departements';
  info: {
    displayName: 'BlocDepartements';
    icon: 'city';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    groupe: Attribute.Relation<
      'composants.bloc-departements',
      'oneToOne',
      'api::groupe.groupe'
    >;
    css: Attribute.Relation<
      'composants.bloc-departements',
      'oneToMany',
      'api::css.css'
    >;
  };
}

export interface ComposantsBlocExpand extends Schema.Component {
  collectionName: 'components_composants_bloc_expands';
  info: {
    displayName: 'BlocExpand';
    icon: 'arrows-alt-v';
  };
  attributes: {
    titre: Attribute.String;
    groupe: Attribute.Relation<
      'composants.bloc-expand',
      'oneToOne',
      'api::groupe.groupe'
    >;
    css: Attribute.Relation<
      'composants.bloc-expand',
      'oneToMany',
      'api::css.css'
    >;
    item: Attribute.Component<'composants.titre-texte-image-lien', true>;
    withMicroData: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ComposantsBlocIframe extends Schema.Component {
  collectionName: 'components_composants_bloc_iframes';
  info: {
    displayName: 'BlocIframe';
    icon: 'window-maximize';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    css: Attribute.Relation<
      'composants.bloc-iframe',
      'oneToMany',
      'api::css.css'
    >;
    groupe: Attribute.Relation<
      'composants.bloc-iframe',
      'oneToOne',
      'api::groupe.groupe'
    >;
  };
}

export interface ComposantsBlocOffres extends Schema.Component {
  collectionName: 'components_composants_bloc_offres';
  info: {
    displayName: 'BlocOffres';
    icon: 'piggy-bank';
  };
  attributes: {
    toggle: Attribute.Component<'composants.toggle'>;
    item: Attribute.Component<'composants.titre-texte-image-lien', true>;
    css: Attribute.Relation<
      'composants.bloc-offres',
      'oneToMany',
      'api::css.css'
    >;
  };
}

export interface ComposantsBlocPubRecurrent extends Schema.Component {
  collectionName: 'components_composants_bloc_pub_recurrents';
  info: {
    displayName: 'BlocPubRecurrent';
    icon: 'ad';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['code', 'driving', 'both']> &
      Attribute.Required &
      Attribute.DefaultTo<'both'>;
    pub: Attribute.Relation<
      'composants.bloc-pub-recurrent',
      'oneToOne',
      'api::pub.pub'
    >;
    css: Attribute.Relation<
      'composants.bloc-pub-recurrent',
      'oneToMany',
      'api::css.css'
    >;
  };
}

export interface ComposantsBlocRatingEleves extends Schema.Component {
  collectionName: 'components_composants_bloc_rating_eleves';
  info: {
    displayName: 'BlocRatingEleves';
    icon: 'star';
  };
  attributes: {
    titre: Attribute.String;
    groupe: Attribute.Relation<
      'composants.bloc-rating-eleves',
      'oneToOne',
      'api::groupe.groupe'
    >;
    css: Attribute.Relation<
      'composants.bloc-rating-eleves',
      'oneToMany',
      'api::css.css'
    >;
  };
}

export interface ComposantsBlocvideo extends Schema.Component {
  collectionName: 'components_composants_blocvideos';
  info: {
    displayName: 'blocvideo';
    icon: 'photo-video';
    description: '';
  };
  attributes: {
    text1: Attribute.String;
    text2: Attribute.String;
    embed: Attribute.String;
    css: Attribute.Relation<
      'composants.blocvideo',
      'oneToMany',
      'api::css.css'
    >;
    ordonnancement: Attribute.Enumeration<
      ["Texte d'abord", "Vid\u00E9o d'abord"]
    > &
      Attribute.DefaultTo<"Texte d'abord">;
    blocID: Attribute.String & Attribute.Unique;
    apercu: Attribute.String;
    texte: Attribute.RichText;
  };
}

export interface ComposantsCta extends Schema.Component {
  collectionName: 'components_composants_ctas';
  info: {
    displayName: 'cta';
    icon: 'link';
    description: '';
  };
  attributes: {
    texte: Attribute.String;
    url: Attribute.Text & Attribute.DefaultTo<'/'>;
    type: Attribute.Enumeration<
      ['link', 'button', 'button_white', 'button_light', 'button_full_width']
    > &
      Attribute.DefaultTo<'link'>;
    target: Attribute.Enumeration<['_self', '_blank']> &
      Attribute.DefaultTo<'_self'>;
    idAncre: Attribute.String;
    page: Attribute.Relation<'composants.cta', 'oneToOne', 'api::page.page'>;
    css: Attribute.Relation<'composants.cta', 'oneToMany', 'api::css.css'>;
  };
}

export interface ComposantsExternalLink extends Schema.Component {
  collectionName: 'components_composants_external_link';
  info: {
    displayName: 'ExternalLink';
    icon: 'link';
    description: '';
  };
  attributes: {
    texte: Attribute.String;
    url: Attribute.String;
    domaine: Attribute.String;
    publicationdate: Attribute.String;
  };
}

export interface ComposantsExternalLinks extends Schema.Component {
  collectionName: 'components_composants_external_links';
  info: {
    displayName: 'ExternalLinks';
    icon: 'external-link-alt';
  };
  attributes: {
    groupe: Attribute.Relation<
      'composants.external-links',
      'oneToOne',
      'api::groupe.groupe'
    >;
    css: Attribute.Relation<
      'composants.external-links',
      'oneToMany',
      'api::css.css'
    >;
    item: Attribute.Component<'composants.external-link', true>;
  };
}

export interface ComposantsGoogleMapsSearchBar extends Schema.Component {
  collectionName: 'components_composants_google_maps_search_bars';
  info: {
    displayName: 'GoogleMapsSearchBar';
    icon: 'map-marker-alt';
    description: '';
  };
  attributes: {
    placeholder: Attribute.String;
    buttonvalue: Attribute.String;
    groupe: Attribute.Relation<
      'composants.google-maps-search-bar',
      'oneToOne',
      'api::groupe.groupe'
    >;
    css: Attribute.Relation<
      'composants.google-maps-search-bar',
      'oneToMany',
      'api::css.css'
    >;
  };
}

export interface ComposantsLottiePlayer extends Schema.Component {
  collectionName: 'components_composants_lottie_players';
  info: {
    displayName: 'LottiePlayer';
    icon: 'caret-square-right';
    description: '';
  };
  attributes: {
    lottieType: Attribute.Enumeration<['code', 'landing', 'permis']>;
    loop: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComposantsNavItem extends Schema.Component {
  collectionName: 'components_composants_nav_items';
  info: {
    displayName: 'NavBuilder';
    icon: 'sitemap';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    groupe: Attribute.Relation<
      'composants.nav-item',
      'oneToOne',
      'api::groupe.groupe'
    >;
    css: Attribute.Relation<'composants.nav-item', 'oneToMany', 'api::css.css'>;
    item: Attribute.Component<'composants.cta', true>;
    withMicroData: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface ComposantsSimulateur extends Schema.Component {
  collectionName: 'components_composants_simulateurs';
  info: {
    displayName: 'Simulateur';
    icon: 'calculator';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    texte: Attribute.RichText;
    groupe: Attribute.Relation<
      'composants.simulateur',
      'oneToOne',
      'api::groupe.groupe'
    >;
    css: Attribute.Relation<
      'composants.simulateur',
      'oneToMany',
      'api::css.css'
    >;
    cta: Attribute.Component<'composants.cta'> & Attribute.Required;
  };
}

export interface ComposantsSlider extends Schema.Component {
  collectionName: 'components_composants_slider';
  info: {
    displayName: 'Slider';
    icon: 'arrows-alt-h';
  };
  attributes: {
    item: Attribute.Component<'composants.titre-texte-image-lien', true>;
    groupe: Attribute.Relation<
      'composants.slider',
      'oneToOne',
      'api::groupe.groupe'
    >;
    css: Attribute.Relation<'composants.slider', 'oneToMany', 'api::css.css'>;
  };
}

export interface ComposantsTitreTexteImageLien extends Schema.Component {
  collectionName: 'components_composants_titre_texte_image_liens';
  info: {
    displayName: 'TitreTexteImageLien';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    titre: Attribute.String;
    texte: Attribute.RichText;
    image: Attribute.Media;
    imageAlt: Attribute.String;
    lottiePlayer: Attribute.Component<'composants.lottie-player'>;
    groupe: Attribute.Relation<
      'composants.titre-texte-image-lien',
      'oneToOne',
      'api::groupe.groupe'
    >;
    css: Attribute.Relation<
      'composants.titre-texte-image-lien',
      'oneToMany',
      'api::css.css'
    >;
    cta: Attribute.Component<'composants.cta'>;
    ordonnancement: Attribute.Enumeration<["Texte d'abord", "Image d'abord"]> &
      Attribute.DefaultTo<"Texte d'abord">;
    blocID: Attribute.String;
    titleType: Attribute.Enumeration<
      ['noTitle', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
    > &
      Attribute.DefaultTo<'h2'>;
    isAnchor: Attribute.Boolean & Attribute.DefaultTo<false>;
    anchorTitle: Attribute.String;
  };
}

export interface ComposantsToggle extends Schema.Component {
  collectionName: 'components_composants_toggles';
  info: {
    displayName: 'Toggle';
    icon: 'toggle-on';
  };
  attributes: {
    text1: Attribute.String & Attribute.Required;
    value1: Attribute.String & Attribute.Required;
    text2: Attribute.String & Attribute.Required;
    value2: Attribute.String & Attribute.Required;
    css: Attribute.Relation<'composants.toggle', 'oneToMany', 'api::css.css'>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_decoration_heroes';
  info: {
    name: 'Hero';
    icon: 'address-card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'composants.bloc-arguments': ComposantsBlocArguments;
      'composants.bloc-bvm-bva': ComposantsBlocBvmBva;
      'composants.bloc-departements': ComposantsBlocDepartements;
      'composants.bloc-expand': ComposantsBlocExpand;
      'composants.bloc-iframe': ComposantsBlocIframe;
      'composants.bloc-offres': ComposantsBlocOffres;
      'composants.bloc-pub-recurrent': ComposantsBlocPubRecurrent;
      'composants.bloc-rating-eleves': ComposantsBlocRatingEleves;
      'composants.blocvideo': ComposantsBlocvideo;
      'composants.cta': ComposantsCta;
      'composants.external-link': ComposantsExternalLink;
      'composants.external-links': ComposantsExternalLinks;
      'composants.google-maps-search-bar': ComposantsGoogleMapsSearchBar;
      'composants.lottie-player': ComposantsLottiePlayer;
      'composants.nav-item': ComposantsNavItem;
      'composants.simulateur': ComposantsSimulateur;
      'composants.slider': ComposantsSlider;
      'composants.titre-texte-image-lien': ComposantsTitreTexteImageLien;
      'composants.toggle': ComposantsToggle;
      'sections.hero': SectionsHero;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
