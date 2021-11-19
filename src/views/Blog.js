import React, { useState } from "react";
import classNames from "classnames";
import { strings } from "../utils/localization";
import Image from "../components/elements/Image";
import { SectionProps } from "../utils/SectionProps";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Blog = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <Image
            className="mb-16"
            src={require("../assets/images/squidgame2.jpg")}
            alt="Blog"
            width={896}
            height={504}
          />
          <div className="hero-content">
            <h2
              className="mt-0 mb-32 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Da li bi Squid Game mogao biti legalan u realnom životu?
            </h2>
            <div className="container-sm">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="200"
              >
                Ukoliko čitate ovaj blog sigurno ste jedna od 142 miliona osoba
                koja je pogledala TV seriju Squid Game. Za one koji do sada nisu
                pogledali seriju, a znamo da je takvih izuzetno malo, riječ je o
                Južnokorejskoj drami koju je kreirao{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Hwang_Dong-hyuk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hwang Dong-hyuk
                </a>{" "}
                za Netflix.
              </p>
              <p>
                U popularnoj seriji učestvuje 456 igrača sastavljenih od osoba
                koje su u velikim finansijskim problemima. Igra im nudi
                mogućnost da zarade 45,6 milijardi jena rizikujući svoje i
                živote drugih igrača igrajući smrtonosne dječije igrice.{" "}
              </p>
              <p>
                {" "}
                S obzirom da je “Squid Game” u suštini dobrovoljni festival
                ubistava u stilu Igara gladi, mogli biste pomosiliti s razlogom
                da bi ove igre bile nezakonite. Bili bi ste u pravu. No, pravna
                složenost ovih igara je mnogo više zanimljivija nego što se na
                prvi pogled čini.{" "}
              </p>
              <p>
                {" "}
                U jednoj od filmskih teorija, poznati youtube analitičar MatPat
                analizira mogućnost postojanja I legalitet ove igre u realnim
                uslovima. Analiza MatPat-a uključuje hipotetičko održavanje igre
                na privatnom otoku ili u posebnoj državi koju bi kreatori igre
                podržali.{" "}
              </p>
              <p>
                Mat zaključuje da bez obzira gdje bi se igre održavale na kraju
                bi njegihovo održavanje bilo nelegalno. Razlog tome leži u
                odgovoru koji je ponudio naš{" "}
                <a
                  href="https://www.linkedin.com/in/ena-ai-14017a226/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  chatbot Ena
                </a>
                . U skladu s aspektima međunarodnog prava i postojanja
                univerzalne jurisdikcije koja zločine protiv čovječnosti
                označava kao nezakonite, bez obzira na unutrašnje pravo suverene
                nacije, zakona i radnji koje propisuje ili ne, ove igre bi bile
                nelegalne i kažnjive.{" "}
              </p>
              <p>
                Sami učesnici bi sami krivično odgovarali i bili krivično krivi
                za smrt drugih takmičara u ovoj popularnoj seriji, bez obzira da
                li su bili direktni izvršioci ili ne. Tako bi popularna uloga
                Deoka bila osuđena na zatvorsko izdržavanje kazne zbog ubistva
                drugih igrača zbog hrane u epizodi 4 “Stick to the team”.{" "}
              </p>
              <p>
                Naš chatbot Ena kazuje da bi čak i pobjednici igara krivično
                odgovarali, pozivajući se na presude zasnovane na ruskom ruletu,
                koji bi utvrdio da su pojedinci koji su učestvovali u igri i
                preživjeli krivi za ubistvo iz nehata iako su žrtve pristale
                igrati i same povukle obarač.{" "}
              </p>
              <p>
                {" "}
                S obzirom da optužba za ubistvo iz nehata iznosti od tri do
                dvadeset godina zatvorske kazne, naš chatbot Ena procjenjuje da
                bi se pobjednik “Squid Game” suočio s potencijalnom kaznom od
                8000 godina kao teret 455 ubistava iz nehata.{" "}
              </p>
              <p>
                {" "}
                Ubistva, smrti i otmice čine očigledne prekršaje zakona, no
                postoji još niz suptilnijih pravnih pitanja koja se odnose na
                rad i zapošljavanje, poreze i zakone o pomorstvu.{" "}
              </p>
              <p>
                {" "}
                Organizatori koji su učinili krivične prekršaje kao što su
                ubistvo, kidnapovanje, gasiranje osoba i držanje osoba u
                zatočeništvu, bili bi krivi i za sve zločine počinjene u igri.
                Prema zakonu o teškom ubistvu, kako nam Ena pojašnjava, osoba
                može biti optužena za bilo koju smrt koja se dogodi tokm vršenja
                krivičnog djela (otmica, kidnapovanje i gasiranje), tako bi
                organizatori bili optuženi za ubistvo s predumišljajem 455
                učesnika ove igre.{" "}
              </p>
              <p>
                {" "}
                Čak i da ne postoji zakon o teškom ubistvu, organizatori bi i
                dalje mogli biti optuženi za ubistva koja su počinili takmičari,
                pod teorijskom pretpostavkom da su oni dirketno nagovarali i
                poticali takmičare na ubistva.{" "}
              </p>
              <p>
                {" "}
                Vjerovatno najteže pravno pitanje odnosi se na pridruživanje i
                pristanak na učestvovanje u „Squid Game“. Odogovor ovisi o
                vremenu donošenja same odluke. Ako se prisjetimo same serije
                možemo uočiti da su takmičari imali dvije prilike da se pridruže
                samoj igri. Prvi put su znali da se prijavljuju za igru i da
                mogu zaraditi novac. U tome nema ništa ilegalno, kako kaže naša
                Ena.{" "}
              </p>
              <Image
                className="mb-16"
                src={require("../assets/images/squidgame4.jpg")}
                alt="Blog"
                width={736}
              />
              <p>
                Nakon prvog kruga, u kome je ubijeno preko 200 takmičara, većina
                igrača je izglasala prestanak samih igara i odmah su bili
                vraćeni kući. Nakon nekoliko dana organizatori su kontaktirali
                učesnika i ponudili im mogućnost povratka u igru. I sada se
                postavlja pitanje da li je ponovno vraćanje u seriju
                protuzakonito?{" "}
              </p>
              <p>
                {" "}
                U jednu ruku možemo tvrditi da nije, s obzirom da rizično
                ponašanje samo po sebi nije kažnjivo. Kako naša Ena analizira,
                ljudi mogu slobodno roniti, penjati se na planine bez sigurnosne
                opreme ili baviti se adrenalinskim sportovima. No, u ovom
                slučaju uzrok smrti nije rizično ponašanje već ubojstvo. Bez
                obzira što učesnici nisi dužni sami počiniti ubistvo njihovo
                sudjelovanje olakšava i omogućava ubilačke radnje.{" "}
              </p>
              <p>
                {" "}
                Ove tvrdnje temelje se na dvije teorije. Prva teorija je da
                takmičari pristanu na ubojstvo, a druga da poduzmu „otvoreni
                čin“ u cilju promicanja ubojstva svoji pristankom za
                sudjelovanje u opasnim igrama. Na osnovu ovih teorija postoje
                tri indikativne kazne za učesnike. Prva, neko bi bio kriv za
                konstruisanje zavjere da bi se počinilo ubojstvo čim se pristane
                na sudjelovanje u igra. Dodatno bi učesnici bili kažnjeni i za
                svaki smrtni ishod koji proistekne iz same zavjere. Na kraju
                zaključak se svodi na optužbe po članovima zakona o krivičnim
                postupcima u postupku zavjere i ubojstva, kako kaže naša Ena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

//<iframe width="560" height="315" src="https://www.youtube.com/embed/Uq_4o0RyMrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;

export default Blog;
