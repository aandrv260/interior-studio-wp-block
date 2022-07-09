import { registerBlockType } from '@wordpress/blocks';
import { Button, TextControl, PanelBody, PanelRow, TextareaControl } from '@wordpress/components';

import {
  InnerBlocks,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor';

registerBlockType('custom-blocks/services-section', {
  title: 'Services section',

  attributes: {
    bgImgID: { type: 'number' },
    bgImgURL: { type: 'string' },
    pricingDescription: { type: 'string' },
    pricingHeading: { type: 'string' },
    ctaButtonText: { type: 'string' },
  },

  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const {
    setAttributes,
    attributes: { bgImgID, bgImgURL, pricingDescription, pricingHeading, ctaButtonText },
  } = props;

  const render = ({ open }) => (
    <Button variant="primary" onClick={open}>
      Change Image
    </Button>
  );

  const fileSelectHandler = ({ id, sizes }) => {
    setAttributes({ bgImgID: id, bgImgURL: sizes.large.url });
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title="Background Image">
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload onSelect={fileSelectHandler} render={render} value={bgImgID} />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>

        <PanelBody title="Pricing section">
          <PanelRow>
            <TextareaControl
              label="Pricing Description"
              value={pricingDescription}
              onChange={newDescription => setAttributes({ pricingDescription: newDescription })}
            />
          </PanelRow>

          <PanelRow>
            <TextControl
              label="Button Text"
              value={ctaButtonText}
              onChange={newText => setAttributes({ ctaButtonText: newText })}
            />
          </PanelRow>

          <PanelRow>
            <TextControl
              label="Section heading"
              value={pricingHeading}
              onChange={newText => setAttributes({ pricingHeading: newText })}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <section class="section-features" style={{ backgroundImage: `url(${bgImgURL})` }}>
        <div class="features grid">
          <div class="features__text-box-col">
            <InnerBlocks allowedBlocks={['core/paragraph', 'core/heading']} />
            {/* <h2 class="features__text-heading">КАКВО ВКЛЮЧВА ИНТЕРИОРНИЯ ПРОЕКТ?</h2> */}
            {/* <ul class="features__list">
              <li class="features__list-item">
                <strong>Архитектурно заснемане</strong> &ndash; посещение на обекта и взимане на
                всички размери от място&#59;
              </li>

              <li class="features__list-item">
                <strong>Варианти на разпределения</strong> &ndash; варианти на цялостното или
                частично преустройство на обекта, когато се налага, зониране на пространствата и
                разполагане основните елементи от обзавеждането. Обсъждаме вариантите с Вас, правим
                необходимите корекции и промени, ако е необходимо. Така оформяме разпределението, на
                базата на което разработваме по отделно всяко помещение&#59;
              </li>

              <li class="features__list-item">
                <strong>Концепция</strong> &ndash; Уточняваме стиловото и цветово оформление на
                обекта. Обсъждаме бюджета, в който трябва да се помести ремонта и
                обзавеждането.&#59;
              </li>

              <li class="features__list-item">
                <strong>Фотореалистични 3D визуализации</strong> &ndash; визуализации с предложения
                за цялостните решения, включващи концепция за мебелите , настилките, таваните,
                стените, осветлението. Обсъждаме вариантите с Вас и правим необходимите корекции и
                промени. След като стигнем до окончателния вариант за всяко помещение преминаваме
                към изработване на технически и работни чертежи&#59;
              </li>

              <li class="features__list-item">
                <strong>План обзавеждане</strong> &ndash; подробна схема за разположение на всички
                мебели&#59;
              </li>

              <li class="features__list-item">
                <strong>План софит</strong> (тавани) &ndash; чертежи на всички декоративни елементи
                по таваните&#59;
              </li>

              <li class="features__list-item">
                <strong>План настилки</strong> &ndash; чертежи на настилките с пояснение за размери,
                вид, цвят и тн&#59;
              </li>

              <li class="features__list-item">
                <strong>Разгъвки (погледи към стените)</strong> &ndash; разгъвки на стените с
                информация за вид обработка, цвят, мебелировка и всички необходими размери&#59;
              </li>

              <li class="features__list-item">
                <strong>План ключове, осветление и контакти</strong> &ndash; обозначаване на точните
                места на всички необходими изводи за осветление, ключове, контакти и др.&#59;
              </li>

              <li class="features__list-item">
                <strong>План ВиК изводи</strong> &ndash; обозначаване на точните места на всички
                необходими изводи за санитарните уреди, отходни каналаи, изводи за топла и студена
                вода&#59;
              </li>

              <li class="features__list-item">
                <strong>Чертежи на мебели</strong> &ndash; когато е необходимо мебелите да бъдат
                изработени по поръчка представяме необходимите чертежи за изработка им&#59;
              </li>

              <li class="features__list-item">
                <strong>Оферти от изпълнители и доставчици за всичко необходимо.</strong>
              </li>
            </ul> */}
          </div>
        </div>

        <div className="editor-placeholder">Pricing section placeholder</div>
      </section>
    </>
  );
}

function SaveComponent() {
  return <InnerBlocks.Content />;
}
