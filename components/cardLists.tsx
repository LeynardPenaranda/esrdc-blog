"use client";

import Image from "next/image";

import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

type CardItem = {
  id: number;
  title: string;
  description: string;
  img: string;
  date: string;
  extraImg?: string;
  videoLink?: string;
};

const descriptionOne = `#𝗞𝗮𝗹𝗶𝗸𝗮𝗦𝗰𝗮𝗻 🌱 #𝗔𝗻𝗶𝗺𝗮𝗟𝗲𝗻𝘀 🐾 | Samar State University, through the Environmental Sustainability Research and Development Center (ESRDC), successfully conducted a 𝗖𝗮𝗽𝗮𝗰𝗶𝘁𝘆 𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗼𝗻 𝘁𝗵𝗲 𝗨𝘁𝗶𝗹𝗶𝘇𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗞𝗮𝗹𝗶𝗸𝗮𝗦𝗰𝗮𝗻 𝗮𝗻𝗱 𝗔𝗻𝗶𝗺𝗮𝗟𝗲𝗻𝘀 𝗳𝗼𝗿 𝗪𝗮𝘁𝗲𝗿𝘀𝗵𝗲𝗱 𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝗶𝘇𝗮𝘁𝗶𝗼𝗻, 𝗕𝗶𝗼𝗱𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗔𝘀𝘀𝗲𝘀𝘀𝗺𝗲𝗻𝘁, 𝗮𝗻𝗱 𝗗𝗮𝘁𝗮 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 at the Audio Visual Room, RIC Building, Samar State University, Catbalogan City, Samar on April 7, 2026. The activity gathered participants from DENR-CENRO Sta. Rita and LGU Calbiga-MENRO to enhance their skills in using innovative digital tools designed to support environmental research and data-driven decision-making. The formal opening of the event was led by 𝗘𝗻𝗴𝗿. 𝗙𝗲𝗹𝗶𝘀𝗮 𝗘. 𝗚𝗼𝗺𝗯𝗮, 𝗣𝗵.𝗗., Vice President for Research and Extension Services. In her opening remarks, Dr. Gomba highlighted the 𝘶𝘯𝘪𝘷𝘦𝘳𝘴𝘪𝘵𝘺’𝘴 𝘴𝘵𝘳𝘰𝘯𝘨 𝘤𝘰𝘮𝘮𝘪𝘵𝘮𝘦𝘯𝘵 𝘵𝘰 𝘴𝘢𝘧𝘦𝘨𝘶𝘢𝘳𝘥𝘪𝘯𝘨 𝘵𝘩𝘦 𝘪𝘯𝘵𝘦𝘭𝘭𝘦𝘤𝘵𝘶𝘢𝘭 𝘱𝘳𝘰𝘱𝘦𝘳𝘵𝘺 𝘳𝘪𝘨𝘩𝘵𝘴 𝘰𝘧 𝘪𝘵𝘴 𝘳𝘦𝘴𝘦𝘢𝘳𝘤𝘩𝘦𝘳𝘴 𝘢𝘯𝘥 𝘪𝘯𝘯𝘰𝘷𝘢𝘵𝘰𝘳𝘴. She emphasized that as new technologies such as 𝗞𝗮𝗹𝗶𝗸𝗮𝗦𝗰𝗮𝗻 and 𝗔𝗻𝗶𝗺𝗮𝗟𝗲𝗻𝘀 are developed, the university will take proactive steps to ensure that these innovations are properly documented and registered. According to her, this not only protects the creators’ rights but also strengthens the institution’s credibility and ownership of its scientific contributions. She further encouraged participants to continue developing innovative solutions, assuring them that the university will provide support in securing legal protection, promoting responsible utilization, and maximizing the societal impact of their work. The activity proceeded with the application orientation of KalikaScan and AnimaLens, facilitated by 𝗗𝗿. 𝗘𝗱𝗲𝗹𝘆𝗻 𝗢. 𝗘𝗰𝗵𝗮𝗽𝗮𝗿𝗲, ESRDC Director, and 𝗠𝗿. 𝗔𝗻𝗱𝗿𝗲𝘀 𝗜𝗜𝗜 𝗕. 𝗦𝗲𝗾𝘂𝗶𝘁𝗼, Faculty Researcher. The session provided participants with an overview of the applications’ features and their practical use in watershed characterization, biodiversity monitoring, and efficient data management. During the workshop proper, participants actively engaged in hands-on exercises, exploring the functionalities of both applications. Many raised questions and shared insights, noting that KalikaScan and AnimaLens have the potential to significantly simplify and improve their fieldwork and data processing tasks. The interactive discussions reflected a strong interest in integrating these tools into their respective research and extension initiatives. Feedback gathered during the session indicated a positive reception, with participants expressing optimism about the applications’ usability and relevance. Both KalikaScan and AnimaLens are seen to be on a promising path toward success, especially as continuous improvements will be guided by feedback from end users. This collaborative approach ensures that the applications remain responsive to the actual needs of researchers and practitioners in the field. The program concluded with closing remarks from 𝗗𝗿. 𝗙𝗹𝗼𝗿𝗮𝗯𝗲𝗹𝗹𝗲 𝗕. 𝗣𝗮𝘁𝗼𝘀𝗮, Executive Director for Extension Services, who commended the participants for their active involvement and encouraged them to apply their newly acquired knowledge in advancing sustainable and inclusive development. As the workshop demonstrated, when innovation meets collaboration, even the most complex ecosystems become easier to understand—proving that with the right tools in hand, protecting our environment is no longer just a challenge, but a shared and achievable mission. #SamarStateUniversity #WeInnovateWeBuildWeServe #SSUESRDC #KalikaScan #AnimaLens via 𝐉𝐮𝐬𝐭𝐲𝐧𝐞 𝐌𝐚𝐲𝐞 𝐍𝐚𝐛𝐚𝐛𝐥𝐢𝐭 | SSU-ESRDC`;

const descriptionTwo = `In full support of the Samar Island Natural Park (SINP) UNESCO World Heritage nomination 🌿
Samar State University (SSU), together with partner institutions and agencies, continues to stand behind this shared effort toward global recognition and protection of SINP.
#taskforcemember
#SINP #UNESCO #worldheritage #SSU
#WeInnovateWeBuildWeServe`;

const descriptionThree = `The Environmental Sustainability Research and Development Center (ESRDC) of Samar State University (SSU), in collaboration with key partner agencies, successfully conducted a consultative meeting aimed at strengthening partnerships and laying the groundwork for a gender-responsive and sustainable youth development program.
The meeting served as a platform to present initial insights from the ongoing research on the pro-environmental behavior of emerging adults in Samar, highlighting the need for targeted interventions that address both environmental and gender-related challenges. Emphasis was placed on the importance of empowering young individuals as active contributors to climate action and sustainable development.
During the consultation, the representatives engaged in meaningful discussions to set standards and define expected outcomes for youth-initiated, gender-responsive programs.
A key highlight of the activity was the strengthening of academic and institutional partnerships, reinforcing the shared commitment of SSU, DepEd, and PYDO to develop inclusive and impactful community-based programs. The consultative meeting also paved the way for the formalization of these collaborations through a Memorandum of Agreement (MOA) in the succeeding activities.`;

const descriptionFour = `𝗘𝗦𝗥𝗗𝗖 𝗖𝗼𝗻𝗱𝘂𝗰𝘁𝘀 𝗕𝗲𝘁𝗮 𝗧𝗲𝘀𝘁𝗶𝗻𝗴 𝗼𝗳 “𝗞𝗮𝗹𝗶𝗸𝗮𝗦𝗰𝗮𝗻” 𝗔𝗽𝗽 𝗳𝗼𝗿 𝗕𝗶𝗼𝗱𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗔𝗿𝗯𝗼𝗿𝗲𝘁𝘂𝗺 𝗣𝗿𝗼𝗷𝗲𝗰𝘁
On March 10, 2026, a beta testing activity for the mobile application KalikaScan was successfully conducted at the Audio-Visual Room (AVR), Research and Innovation Center (RIC) Building of Samar State University (SSU). The activity was organized as part of the ongoing implementation of the 𝐒𝐒𝐔 𝐁𝐢𝐨𝐝𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐀𝐫𝐛𝐨𝐫𝐞𝐭𝐮𝐦 𝐏𝐫𝐨𝐣𝐞𝐜𝐭, which aims to document plant species within the campus and establish a mini biodiversity arboretum to support conservation, research, and environmental education.
The beta testing activity supports the project titled “𝑪𝒂𝒎𝒑𝒖𝒔 𝑩𝒊𝒐𝒅𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚 𝑨𝒔𝒔𝒆𝒔𝒔𝒎𝒆𝒏𝒕, 𝑻𝒂𝒙𝒐𝒏𝒐𝒎𝒊𝒄 𝑫𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒂𝒕𝒊𝒐𝒏, 𝒂𝒏𝒅 𝑴𝒊𝒏𝒊-𝑨𝒓𝒃𝒐𝒓𝒆𝒕𝒖𝒎 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕 𝒂𝒕 𝑺𝑺𝑼,” which focuses on assessing and documenting campus flora while integrating digital technologies for biodiversity monitoring and learning.
During the activity, selected students were given the opportunity to test the features of KalikaScan by exploring areas around the SSU campus and taking photographs of various plant species. The application allows users to scan plants through their mobile devices, enabling the system to process images and assist in identifying plant species while generating preliminary digital records for biodiversity documentation.
The beta testing was facilitated by 𝐋𝐞𝐲𝐧𝐚𝐫𝐝 𝐌. 𝐏𝐞ñ𝐚𝐫𝐚𝐧𝐝𝐚, a BSIS student at SSU and the developer of KalikaScan, together with his team, and Mr. Andres Basa Sequito, a faculty researcher of ESRDC. Ms. Maryjes G. Calades was also present to supervise the activity. They guided the participating students through the proper use of the application, including image capture, scanning procedures, and the digital recording of plant information. The activity also allowed students to experience how emerging technologies can support biodiversity assessment and environmental research.
Through this beta testing, the development team gathered valuable feedback from the participants regarding the application’s usability, functionality, and performance in a real campus setting. The insights collected during the activity will help further improve KalikaScan before it is fully integrated into the biodiversity documentation activities of the arboretum project.
#SSUESRDC #SamarStateUniversity #WeInnovateWeBuildWeServe #KalikaScanApp #SSUBiodiversityArboretum
via 𝐉𝐮𝐬𝐭𝐲𝐧𝐞 𝐌𝐚𝐲𝐞 𝐍𝐚𝐛𝐚𝐛𝐥𝐢𝐭 | SSU-ESRDC`;

const descriptionFive = `𝗛𝗜𝗚𝗛𝗟𝗜𝗚𝗛𝗧𝗦 | The Environmental Sustainability Research and Development Center (ESRDC) proudly announces its recognitions during the recently concluded 𝟮𝟬𝟮𝟲 𝗥𝗗𝗘 𝗞𝗶𝗰𝗸-𝗢𝗳𝗳: 𝟭𝘀𝘁 𝗤𝘂𝗮𝗿𝘁𝗲𝗿 𝗣𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 𝗥𝗲𝘃𝗶𝗲𝘄 𝗮𝗻𝗱 𝗔𝘄𝗮𝗿𝗱𝘀 𝗖𝗼𝗻𝘃𝗼𝗰𝗮𝘁𝗶𝗼𝗻, anchored on the theme, “Igniting Impact: Remember, Recognize, Refocus—Recalibrating the RDE Synergy for a Reimagined RDE Future.”
𝐄𝐒𝐑𝐃𝐂 bagged one of the major awards, the 𝐑𝐞𝐬𝐞𝐚𝐫𝐜𝐡 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐢𝐨𝐧 𝐄𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞 𝐀𝐰𝐚𝐫𝐝, a prestigious institutional distinction recognizing the center's exceptional commitment to knowledge generation through the highest research productivity for 2025.
The center was also conferred the 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐂𝐨𝐦𝐦𝐞𝐫𝐜𝐢𝐚𝐥𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐀𝐰𝐚𝐫𝐝, presented to 𝐃𝐫. 𝐄𝐝𝐞𝐥𝐲𝐧 𝐎. 𝐄𝐜𝐡𝐚𝐩𝐚𝐫𝐞, in recognition of outstanding creativity, dedication, and exemplary contribution to innovation for successfully Licensing and Commercializing an IP.
In addition to these institutional recognitions, several ESRDC-assisted studies received the 𝐑𝐞𝐬𝐞𝐚𝐫𝐜𝐡 𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐀𝐰𝐚𝐫𝐝, highlighting the scholarly productivity and collaborative excellence. Awarded contributors include Anne Frances V. Buhay, Maria Celeste N. Banaticla-Hilario, Inocencio E. Buot, Jr., Jones T. Napaldet, Lailani Masungsong, Marne Origenes, Noba Hilvano, Edelyn O. Echapare, and Diane Shane Balindo.
A separate 𝐑𝐞𝐬𝐞𝐚𝐫𝐜𝐡 𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐀𝐰𝐚𝐫𝐝 was also granted to Valentyna Pleskach, Frank Angelo Pacala, Mary Jane Cinco, Rezy Mendaño, and Edelyn O. Echapare for their notable scholarly contributions. Notably, 𝐌𝐬. 𝐌𝐚𝐫𝐲 𝐉𝐚𝐧𝐞 𝐂𝐢𝐧𝐜𝐨 was further recognized with the 𝐁𝐞𝐬𝐭 𝐏𝐚𝐩𝐞𝐫 𝐀𝐰𝐚𝐫𝐝 (𝐒𝐨𝐜𝐢𝐚𝐥 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 𝐓𝐫𝐚𝐜𝐤), underscoring the quality, relevance, and impact of her research.
Additionally, the publication by 𝐃𝐫. 𝐑𝐞𝐳𝐲 𝐌𝐞𝐧𝐝𝐚ñ𝐨 and 𝐅𝐫𝐚𝐧𝐤 𝐀𝐧𝐠𝐞𝐥𝐨 𝐏𝐚𝐜𝐚𝐥𝐚, which received cash incentive from SSU, was also recognized, further highlighting their exemplary contribution to research excellence.
These distinctions affirm ESRDC’s continuing pursuit of research excellence, innovation, and knowledge dissemination in the field of environmental sustainability.
#SSUESRDC #SamarStateUniversity #WeInnovateWeBuildWeServe #IgnitingImpact
via 𝐉𝐮𝐬𝐭𝐲𝐧𝐞 𝐌𝐚𝐲𝐞 𝐍𝐚𝐛𝐚𝐛𝐥𝐢𝐭 | SSU-ESRDC`;

const descriptionSix = `The Environmental Sustainability Research and Development Center (ESRDC), in collaboration with the Eastern Visayas Center for Crustacean Research and Development (EVCRD), successfully hosted the 2026 SSU Student Research and Development Congress at Samar State University. The event gathered undergraduate and graduate student researchers from various colleges to showcase innovative studies, strengthen research capabilities, and promote interdisciplinary collaboration through plenary presentations, paper competitions, and recognition of outstanding research outputs.`;

const getEmbedLink = (videoLink: string) => {
  if (videoLink.includes("youtu.be/")) {
    return videoLink.replace(
      "https://youtu.be/",
      "https://www.youtube.com/embed/",
    );
  }

  if (videoLink.includes("watch?v=")) {
    return videoLink.replace("watch?v=", "embed/");
  }

  return videoLink;
};

const cardItems: CardItem[] = [
  {
    id: 1,
    title:
      "SSU Strengthens Environmental Research Through KalikaScan and AnimaLens Capacity Building Workshop",
    description: descriptionOne,
    img: "/carousel-list-images/1.jpg",
    date: "April 7, 2026",
  },
  {
    id: 6,
    title: "ESRDC Hosts 2026 SSU Student Research and Development Congress",
    description: descriptionSix,
    img: "/carousel-list-images/6.jpg",
    date: "April 25, 2026",
  },
  {
    id: 2,
    title: "SSU Supports SINP's Bid for UNESCO World Heritage Recognition",
    description: descriptionTwo,
    img: "/carousel-list-images/2.jpg",
    date: "March 25, 2026",
  },
  {
    id: 3,
    title:
      "SSU-ESRDC Strengthens Partnerships for Gender-Responsive and Sustainable Youth Development",
    description: descriptionThree,
    img: "/carousel-list-images/3.jpg",
    date: "March 18, 2026",
  },
  {
    id: 4,
    title:
      "SSU-ESRDC Advances Digital Biodiversity Monitoring Through KalikaScan Beta Testing",
    description: descriptionFour,
    img: "/carousel-list-images/4.jpg",
    date: "March 05, 2026",
    extraImg: "/kalikascan.png",
    videoLink: "https://youtu.be/IeY4rr_2zDg",
  },
  {
    id: 5,
    title:
      "ESRDC Shines at 2026 RDE Kick-Off with Multiple Research and Innovation Awards",
    description: descriptionFive,
    img: "/carousel-list-images/5.jpg",
    date: "March 05, 2026",
  },
];

const CardLists = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cardItems.map((item) => (
        <Drawer key={item.id}>
          <DrawerTrigger asChild>
            <button
              type="button"
              className="group flex h-115 w-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {item.date}
                </p>
                <h3 className="mt-2 line-clamp-2 text-xl font-semibold leading-snug text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 line-clamp-4 whitespace-pre-line text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </p>

                <span className="mt-auto inline-flex h-9 w-fit cursor-pointer items-center justify-center rounded-4xl border border-slate-300 px-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100">
                  Read More
                </span>
              </div>
            </button>
          </DrawerTrigger>

          <DrawerContent className="mx-auto w-full max-w-3xl">
            <div className="overflow-y-auto">
              <div className="relative mx-4 mt-2 h-56 overflow-hidden bg-slate-100 sm:h-72">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 768px, 100vw"
                />
              </div>

              <DrawerHeader className="text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                  {item.date}
                </p>
                <DrawerTitle className="text-2xl font-semibold leading-tight text-slate-950">
                  {item.title}
                </DrawerTitle>
                {item.extraImg ? (
                  <div className="relative mx-auto mt-4 h-16 w-16 overflow-hidden border border-slate-200 bg-slate-100 sm:h-20 sm:w-20">
                    <Image
                      src={item.extraImg}
                      alt={`${item.title} supporting image`}
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 768px, 100vw"
                    />
                  </div>
                ) : null}
                <DrawerDescription className="whitespace-pre-line text-justify text-base leading-8 text-slate-600">
                  {item.description}
                </DrawerDescription>
                {item.videoLink ? (
                  <div className="mt-4 overflow-hidden border border-slate-200 bg-slate-950">
                    <div className="relative aspect-video">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={getEmbedLink(item.videoLink)}
                        title={`${item.title} video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ) : null}
              </DrawerHeader>

              <DrawerFooter className="sm:flex-row sm:justify-end">
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
};

export default CardLists;
