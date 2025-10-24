import type { Schema, Struct } from '@strapi/strapi';

export interface SharedEducation extends Struct.ComponentSchema {
  collectionName: 'components_shared_educations';
  info: {
    displayName: 'education';
  };
  attributes: {
    list: Schema.Attribute.Component<'shared.list-education', false>;
    title: Schema.Attribute.String;
  };
}

export interface SharedListEducation extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_educations';
  info: {
    displayName: 'listEducation';
  };
  attributes: {
    description: Schema.Attribute.Text;
    years: Schema.Attribute.BigInteger;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedProfessionalSkill extends Struct.ComponentSchema {
  collectionName: 'components_shared_professional_skills';
  info: {
    displayName: 'professional-skill';
  };
  attributes: {
    skill: Schema.Attribute.Text;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSchedule extends Struct.ComponentSchema {
  collectionName: 'components_shared_schedules';
  info: {
    displayName: 'schedule';
  };
  attributes: {
    day: Schema.Attribute.String;
    time: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_items';
  info: {
    displayName: 'serviceItem';
  };
  attributes: {
    name: Schema.Attribute.String;
    price: Schema.Attribute.BigInteger;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSpecializations extends Struct.ComponentSchema {
  collectionName: 'components_shared_specializations';
  info: {
    displayName: 'specializations';
  };
  attributes: {
    specialization: Schema.Attribute.Text;
  };
}

export interface SharedVaccineItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_vaccine_items';
  info: {
    displayName: 'vaccineItem';
  };
  attributes: {
    itemTitle: Schema.Attribute.String;
    list: Schema.Attribute.Component<'shared.service-item', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.education': SharedEducation;
      'shared.list-education': SharedListEducation;
      'shared.media': SharedMedia;
      'shared.professional-skill': SharedProfessionalSkill;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.schedule': SharedSchedule;
      'shared.seo': SharedSeo;
      'shared.service-item': SharedServiceItem;
      'shared.slider': SharedSlider;
      'shared.specializations': SharedSpecializations;
      'shared.vaccine-item': SharedVaccineItem;
    }
  }
}
