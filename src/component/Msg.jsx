import React from "react";
import "./Msg.css";

const Msg = () => {
  return (
    <div className="main-head">
      <div
        className="hero-header"
        style={{
          backgroundImage:
            "url(https://zitouna.azureedge.net/media/financements/Cartes%20zitouna.png)",
        }}
      >
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-12 z-1  simple ">
              <h1>
                <div className="field_title_header">Mes Cartes</div>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <nav role="navigation" aria-labelledby="system-breadcrumb">
          <h2 id="system-breadcrumb" class="visually-hidden">
            Fil d'Ariane
          </h2>
          <ul className="nav-breadcrumb">
            <li>
              <a href="/fr">Accueil</a>
            </li>
            <li>
              <a href="/fr/particuliers/gerer-mon-quotidien">
                Gérer mon Quotidien
              </a>
            </li>
            <li>Mes Cartes</li>
          </ul>
        </nav>
      </div>
      <div
        data-drupal-views-infinite-scroll-content-wrapper=""
        className="views-infinite-scroll-content-wrapper clearfix"
      >
        <article className="b-teaser-reversable">
          <div className="img-container">
            <div className="img">
              <div className="img-sub-header">
                <div className="field_sub_header">
                  {" "}
                  <div className="paragraph paragraph--type--sub-header paragraph--view-mode--accroche">
                    <div className="field_sub_header_image">
                      {" "}
                      <img
                        src="https://zitouna.azureedge.net/media/sub-header/carte_classique_0.png"
                        width="1920"
                        height="400"
                        alt="Carte Classique "
                        typeof="foaf:Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2 className="title">
              <div className="field_titre_a_afficher">
                <a
                  href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-classique"
                  hreflang="fr"
                >
                  Vous souhaitez avoir la Carte Classique ?
                </a>
              </div>
            </h2>

            <div className="description">
              <div className="field_presentation">
                <p>
                  Vous êtes titulaire d’un compte "Hisseb Racid" chez Banque
                  Zitouna ? Vous souhaitez retirer de l’argent liquide à tout
                  moment et sans avoir besoin de vous déplacer à votre agence?
                  Vous souhaitez régler vos dépenses quotidiennes ?<br />
                  Banque Zitouna vous propose la{" "}
                  <strong>Carte Classique</strong> pour répondre à vos besoins.
                </p>
              </div>
            </div>

            <div className="read-more">
              <ul className="links inline">
                <li class="node-readmore">
                  <a
                    href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-classique"
                    rel="tag"
                    title="Carte Classique "
                    hreflang="fr"
                  >
                    Plus de détails
                    <span className="visually-hidden">
                      {" "}
                      sur Carte Classique{" "}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="b-teaser-reversable">
          <div className="img-container">
            <div className="img">
              <div className="img-sub-header">
                <div className="field_sub_header">
                  {" "}
                  <div className="paragraph paragraph--type--sub-header paragraph--view-mode--accroche">
                    <div className="field_sub_header_image">
                      {" "}
                      <img
                        src="https://zitouna.azureedge.net/media/sub-header/carte_gold_0.png"
                        width="1920"
                        height="400"
                        alt="Carte Gold"
                        typeof="foaf:Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2 className="title">
              <div className="field_titre_a_afficher">
                <a
                  href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-gold"
                  hreflang="fr"
                >
                  Vous souhaitez avoir la Carte Gold ?
                </a>
              </div>
            </h2>

            <div className="description">
              <div className="field_presentation">
                <p>
                  Vous souhaitez bénéficier des avantages d'une carte haut de
                  gamme ? Vous voulez disposer de plafonds de paiement et de
                  retrait importants à la mesure de votre statut de client
                  privilégié ?
                </p>

                <p>
                  Banque Zitouna vous propose la <strong>Carte Gold</strong>
                  .&nbsp;
                </p>
              </div>
            </div>

            <div className="read-more">
              <ul className="links inline">
                <li class="node-readmore">
                  <a
                    href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-gold"
                    rel="tag"
                    title="Carte Gold"
                    hreflang="fr"
                  >
                    Plus de détails
                    <span class="visually-hidden"> sur Carte Gold</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="b-teaser-reversable">
          <div className="img-container">
            <div className="img">
              <div className="img-sub-header">
                <div className="field_sub_header">
                  {" "}
                  <div className="paragraph paragraph--type--sub-header paragraph--view-mode--accroche">
                    <div className="field_sub_header_image">
                      {" "}
                      <img
                        src="https://zitouna.azureedge.net/media/sub-header/carte_platinum_1.png"
                        width="1920"
                        height="400"
                        alt="Carte Platinum"
                        typeof="foaf:Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2 className="title">
              <div className="field_titre_a_afficher">
                <a
                  href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-platinum"
                  hreflang="fr"
                >
                  Vous souhaitez avoir la Carte Platinum ?
                </a>
              </div>
            </h2>

            <div className="description">
              <div className="field_presentation">
                <p>
                  Vous souhaitez bénéficier des avantages d'une carte très
                  &nbsp;haut de gamme ? Vous voulez disposer d'une&nbsp;panoplie
                  de services et d’avantages exclusifs destinés à une clientèle
                  ayant un niveau d’exigences élevé ? &nbsp;
                  <br />
                  Banque Zitouna vous propose la <strong>Carte Platinum</strong>
                  .
                </p>
              </div>
            </div>

            <div className="read-more">
              <ul className="links inline">
                <li className="node-readmore">
                  <a
                    href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-platinum"
                    rel="tag"
                    title="Carte Platinum"
                    hreflang="fr"
                  >
                    Plus de détails
                    <span className="visually-hidden"> sur Carte Platinum</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="b-teaser-reversable">
          <div className="img-container">
            <div className="img">
              <div className="img-sub-header">
                <div className="field_sub_header">
                  {" "}
                  <div className="paragraph paragraph--type--sub-header paragraph--view-mode--accroche">
                    <div className="field_sub_header_image">
                      {" "}
                      <img
                        src="https://zitouna.azureedge.net/media/sub-header/carte_tawfir_0.png"
                        width="1920"
                        height="400"
                        alt="Carte Tawfir "
                        typeof="foaf:Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2 className="title">
              <div className="field_titre_a_afficher">
                <a
                  href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-tawfir"
                  hreflang="fr"
                >
                  Vous souhaitez avoir une Carte d'Epargne ?
                </a>
              </div>
            </h2>

            <div className="description">
              <div className="field_presentation">
                <p>
                  Vous souhaitez faire face à des dépenses urgentes ? Vous
                  voulez accéder à votre épargne en toute sécurité ?&nbsp;
                  <br />
                  Banque Zitouna vous propose la <strong>Carte Tawfir</strong>
                  .&nbsp;
                </p>
              </div>
            </div>

            <div className="read-more">
              <ul className="links inline">
                <li className="node-readmore">
                  <a
                    href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-tawfir"
                    rel="tag"
                    title="Carte Tawfir "
                    hreflang="fr"
                  >
                    Plus de détails
                    <span className="visually-hidden"> sur Carte Tawfir </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="b-teaser-reversable">
          <div className="img-container">
            <div className="img">
              <div className="img-sub-header">
                <div className="field_sub_header">
                  {" "}
                  <div className="paragraph paragraph--type--sub-header paragraph--view-mode--accroche">
                    <div className="field_sub_header_image">
                      {" "}
                      <img
                        src="https://zitouna.azureedge.net/media/sub-header/carte_safar_0.png"
                        width="1920"
                        height="400"
                        alt="Carte Safar "
                        typeof="foaf:Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2 className="title">
              <div className="field_titre_a_afficher">
                <a
                  href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-safar"
                  hreflang="fr"
                >
                  Vous souhaitez avoir une Carte d'Allocation Touristique ?
                </a>
              </div>
            </h2>

            <div className="description">
              <div className="field_presentation">
                <p>
                  Vous souhaitez réserver des hôtels à l’étranger depuis la
                  Tunisie ? Vous voulez profiter d’une large palette de services
                  d’assurance et d’assistance à l’étranger ? Banque Zitouna vous
                  propose la <strong>Carte Safar</strong>&nbsp;pour répondre à
                  tous vos besoins.
                  <br />
                  &nbsp;
                </p>
              </div>
            </div>

            <div className="read-more">
              <ul className="links inline">
                <li className="node-readmore">
                  <a
                    href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-safar"
                    rel="tag"
                    title="Carte Safar "
                    hreflang="fr"
                  >
                    Plus de détails
                    <span className="visually-hidden"> sur Carte Safar </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="b-teaser-reversable">
          <div className="img-container">
            <div className="img">
              <div className="img-sub-header">
                <div className="field_sub_header">
                  {" "}
                  <div className="paragraph paragraph--type--sub-header paragraph--view-mode--accroche">
                    <div className="field_sub_header_image">
                      {" "}
                      <img
                        src="https://zitouna.azureedge.net/media/sub-header/carte_technologique_0.png"
                        width="1920"
                        height="400"
                        alt="Carte Technologique"
                        typeof="foaf:Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2 className="title">
              <div className="field_titre_a_afficher">
                <a
                  href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique"
                  hreflang="fr"
                >
                  Vous souhaitez avoir la Carte Technologique ?
                </a>
              </div>
            </h2>

            <div className="description">
              <div className="field_presentation">
                <p>
                  Vous souhaitez faire des règlements en devise via
                  Internet&nbsp;? Vous développez des applications mobiles et
                  vous souhaitez promouvoir vos solutions à
                  l’international&nbsp;? Banque Zitouna vous propose la{" "}
                  <strong>Carte Technologique</strong>.
                </p>
              </div>
            </div>

            <div className="read-more">
              <ul className="links inline">
                <li className="node-readmore">
                  <a
                    href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-technologique"
                    rel="tag"
                    title="Carte Technologique"
                    hreflang="fr"
                  >
                    Plus de détails
                    <span className="visually-hidden">
                      {" "}
                      sur Carte Technologique
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="b-teaser-reversable">
          <div className="img-container">
            <div className="img">
              <div className="img-sub-header">
                <div className="field_sub_header">
                  {" "}
                  <div className="paragraph paragraph--type--sub-header paragraph--view-mode--accroche">
                    <div className="field_sub_header_image">
                      <img
                        src="https://zitouna.azureedge.net/media/sub-header/carte_el_yosr_1.png"
                        width="1920"
                        height="400"
                        alt="Carte El Yosr"
                        typeof="foaf:Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2 className="title">
              <div className="field_titre_a_afficher">
                <a
                  href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-el-yosr"
                  hreflang="fr"
                >
                  Vous voulez décaler le paiement de vos achats ?
                </a>
              </div>
            </h2>

            <div className="description">
              <div className="field_presentation">
                <p>
                  Vous voulez faire face à des dépenses urgentes et imprévues
                  sans être immédiatement à découvert et sans pour autant payer
                  des frais ? Vous voulez éviter les problèmes de liquidités de
                  fin du mois ? Banque Zitouna met à votre disposition la{" "}
                  <strong>Carte El Yosr</strong>.
                </p>
              </div>
            </div>

            <div className="read-more">
              <ul className="links inline">
                <li className="node-readmore">
                  <a
                    href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-el-yosr"
                    rel="tag"
                    title="Carte El Yosr "
                    hreflang="fr"
                  >
                    Plus de détails
                    <span className="visually-hidden"> sur Carte El Yosr </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="b-teaser-reversable">
          <div className="img-container">
            <div className="img">
              <div className="img-sub-header">
                <div className="field_sub_header">
                  {" "}
                  <div className="paragraph paragraph--type--sub-header paragraph--view-mode--accroche">
                    <div className="field_sub_header_image">
                      {" "}
                      <img
                        src="https://zitouna.azureedge.net/media/sub-header/carte_sayedati_1.png"
                        width="1920"
                        height="400"
                        alt="Carte Sayedati "
                        typeof="foaf:Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2 className="title">
              <div className="field_titre_a_afficher">
                <a
                  href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-sayedati"
                  hreflang="fr"
                >
                  Vous souhaitez avoir une Carte exclusivement pour vous
                  Mesdames ?
                </a>
              </div>
            </h2>

            <div className="description">
              <div className="field_presentation">
                <p>
                  Vous souhaitez avoir une carte exclusivement pour vous
                  Mesdames? Vous voulez profiter des réductions avec nos
                  différents partenaires ? Banque Zitouna vous propose la{" "}
                  <strong>Carte Sayedati</strong>. &nbsp;
                </p>
              </div>
            </div>

            <div className="read-more">
              <ul className="links inline">
                <li className="node-readmore">
                  <a
                    href="/fr/particuliers/gerer-mon-quotidien/mes-cartes/carte-sayedati"
                    rel="tag"
                    title="Carte Sayedati"
                    hreflang="fr"
                  >
                    Plus de détails
                    <span className="visually-hidden"> sur Carte Sayedati</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Msg;
