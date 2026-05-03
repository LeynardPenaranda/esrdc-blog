"use client";

import Image from "next/image";
import { CENTER_NAME } from "@/utils/site";

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
  extraLink?: string;
};

const descriptionOne = `#𝗞𝗮𝗹𝗶𝗸𝗮𝗦𝗰𝗮𝗻 🌱 #𝗔𝗻𝗶𝗺𝗮𝗟𝗲𝗻𝘀 🐾 | Samar State University, through the ${CENTER_NAME}, successfully conducted a 𝗖𝗮𝗽𝗮𝗰𝗶𝘁𝘆 𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗼𝗻 𝘁𝗵𝗲 𝗨𝘁𝗶𝗹𝗶𝘇𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗞𝗮𝗹𝗶𝗸𝗮𝗦𝗰𝗮𝗻 𝗮𝗻𝗱 𝗔𝗻𝗶𝗺𝗮𝗟𝗲𝗻𝘀 𝗳𝗼𝗿 𝗪𝗮𝘁𝗲𝗿𝘀𝗵𝗲𝗱 𝗖𝗵𝗮𝗿𝗮𝗰𝘁𝗲𝗿𝗶𝘇𝗮𝘁𝗶𝗼𝗻, 𝗕𝗶𝗼𝗱𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗔𝘀𝘀𝗲𝘀𝘀𝗺𝗲𝗻𝘁, 𝗮𝗻𝗱 𝗗𝗮𝘁𝗮 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 at the Audio Visual Room, RIC Building, Samar State University, Catbalogan City, Samar on April 7, 2026. The activity gathered participants from DENR-CENRO Sta. Rita and LGU Calbiga-MENRO to enhance their skills in using innovative digital tools designed to support environmental research and data-driven decision-making. The formal opening of the event was led by 𝗘𝗻𝗴𝗿. 𝗙𝗲𝗹𝗶𝘀𝗮 𝗘. 𝗚𝗼𝗺𝗯𝗮, 𝗣𝗵.𝗗., Vice President for Research and Extension Services. In her opening remarks, Dr. Gomba highlighted the 𝘶𝘯𝘪𝘷𝘦𝘳𝘴𝘪𝘵𝘺’𝘴 𝘴𝘵𝘳𝘰𝘯𝘨 𝘤𝘰𝘮𝘮𝘪𝘵𝘮𝘦𝘯𝘵 𝘵𝘰 𝘴𝘢𝘧𝘦𝘨𝘶𝘢𝘳𝘥𝘪𝘯𝘨 𝘵𝘩𝘦 𝘪𝘯𝘵𝘦𝘭𝘭𝘦𝘤𝘵𝘶𝘢𝘭 𝘱𝘳𝘰𝘱𝘦𝘳𝘵𝘺 𝘳𝘪𝘨𝘩𝘵𝘴 𝘰𝘧 𝘪𝘵𝘴 𝘳𝘦𝘴𝘦𝘢𝘳𝘤𝘩𝘦𝘳𝘴 𝘢𝘯𝘥 𝘪𝘯𝘯𝘰𝘷𝘢𝘵𝘰𝘳𝘴. She emphasized that as new technologies such as 𝗞𝗮𝗹𝗶𝗸𝗮𝗦𝗰𝗮𝗻 and 𝗔𝗻𝗶𝗺𝗮𝗟𝗲𝗻𝘀 are developed, the university will take proactive steps to ensure that these innovations are properly documented and registered. According to her, this not only protects the creators’ rights but also strengthens the institution’s credibility and ownership of its scientific contributions. She further encouraged participants to continue developing innovative solutions, assuring them that the university will provide support in securing legal protection, promoting responsible utilization, and maximizing the societal impact of their work. The activity proceeded with the application orientation of KalikaScan and AnimaLens, facilitated by 𝗗𝗿. 𝗘𝗱𝗲𝗹𝘆𝗻 𝗢. 𝗘𝗰𝗵𝗮𝗽𝗮𝗿𝗲, ${CENTER_NAME} Director, and 𝗠𝗿. 𝗔𝗻𝗱𝗿𝗲𝘀 𝗜𝗜𝗜 𝗕. 𝗦𝗲𝗾𝘂𝗶𝘁𝗼, Faculty Researcher. The session provided participants with an overview of the applications’ features and their practical use in watershed characterization, biodiversity monitoring, and efficient data management. During the workshop proper, participants actively engaged in hands-on exercises, exploring the functionalities of both applications. Many raised questions and shared insights, noting that KalikaScan and AnimaLens have the potential to significantly simplify and improve their fieldwork and data processing tasks. The interactive discussions reflected a strong interest in integrating these tools into their respective research and extension initiatives. Feedback gathered during the session indicated a positive reception, with participants expressing optimism about the applications’ usability and relevance. Both KalikaScan and AnimaLens are seen to be on a promising path toward success, especially as continuous improvements will be guided by feedback from end users. This collaborative approach ensures that the applications remain responsive to the actual needs of researchers and practitioners in the field. The program concluded with closing remarks from 𝗗𝗿. 𝗙𝗹𝗼𝗿𝗮𝗯𝗲𝗹𝗹𝗲 𝗕. 𝗣𝗮𝘁𝗼𝘀𝗮, Executive Director for Extension Services, who commended the participants for their active involvement and encouraged them to apply their newly acquired knowledge in advancing sustainable and inclusive development. As the workshop demonstrated, when innovation meets collaboration, even the most complex ecosystems become easier to understand—proving that with the right tools in hand, protecting our environment is no longer just a challenge, but a shared and achievable mission. #SamarStateUniversity #WeInnovateWeBuildWeServe #SSUESRDC #KalikaScan #AnimaLens via 𝐉𝐮𝐬𝐭𝐲𝐧𝐞 𝐌𝐚𝐲𝐞 𝐍𝐚𝐛𝐚𝐛𝐥𝐢𝐭 | SSU-ESRDC`;

const descriptionTwo = `In full support of the Samar Island Natural Park (SINP) UNESCO World Heritage nomination 🌿
Samar State University (SSU), together with partner institutions and agencies, continues to stand behind this shared effort toward global recognition and protection of SINP.
#taskforcemember
#SINP #UNESCO #worldheritage #SSU
#WeInnovateWeBuildWeServe`;

const descriptionThree = `The ${CENTER_NAME} of Samar State University (SSU), in collaboration with key partner agencies, successfully conducted a consultative meeting aimed at strengthening partnerships and laying the groundwork for a gender-responsive and sustainable youth development program.
The meeting served as a platform to present initial insights from the ongoing research on the pro-environmental behavior of emerging adults in Samar, highlighting the need for targeted interventions that address both environmental and gender-related challenges. Emphasis was placed on the importance of empowering young individuals as active contributors to climate action and sustainable development.
During the consultation, the representatives engaged in meaningful discussions to set standards and define expected outcomes for youth-initiated, gender-responsive programs.
A key highlight of the activity was the strengthening of academic and institutional partnerships, reinforcing the shared commitment of SSU, DepEd, and PYDO to develop inclusive and impactful community-based programs. The consultative meeting also paved the way for the formalization of these collaborations through a Memorandum of Agreement (MOA) in the succeeding activities.`;

const descriptionFour = `𝗘𝗦𝗥𝗗𝗖 𝗖𝗼𝗻𝗱𝘂𝗰𝘁𝘀 𝗕𝗲𝘁𝗮 𝗧𝗲𝘀𝘁𝗶𝗻𝗴 𝗼𝗳 “𝗞𝗮𝗹𝗶𝗸𝗮𝗦𝗰𝗮𝗻” 𝗔𝗽𝗽 𝗳𝗼𝗿 𝗕𝗶𝗼𝗱𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 𝗔𝗿𝗯𝗼𝗿𝗲𝘁𝘂𝗺 𝗣𝗿𝗼𝗷𝗲𝗰𝘁
On March 10, 2026, a beta testing activity for the mobile application KalikaScan was successfully conducted at the Audio-Visual Room (AVR), Research and Innovation Center (RIC) Building of Samar State University (SSU). The activity was organized as part of the ongoing implementation of the 𝐒𝐒𝐔 𝐁𝐢𝐨𝐝𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐀𝐫𝐛𝐨𝐫𝐞𝐭𝐮𝐦 𝐏𝐫𝐨𝐣𝐞𝐜𝐭, which aims to document plant species within the campus and establish a mini biodiversity arboretum to support conservation, research, and environmental education.
The beta testing activity supports the project titled “𝑪𝒂𝒎𝒑𝒖𝒔 𝑩𝒊𝒐𝒅𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚 𝑨𝒔𝒔𝒆𝒔𝒔𝒎𝒆𝒏𝒕, 𝑻𝒂𝒙𝒐𝒏𝒐𝒎𝒊𝒄 𝑫𝒐𝒄𝒖𝒎𝒆𝒏𝒕𝒂𝒕𝒊𝒐𝒏, 𝒂𝒏𝒅 𝑴𝒊𝒏𝒊-𝑨𝒓𝒃𝒐𝒓𝒆𝒕𝒖𝒎 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕 𝒂𝒕 𝑺𝑺𝑼,” which focuses on assessing and documenting campus flora while integrating digital technologies for biodiversity monitoring and learning.
During the activity, selected students were given the opportunity to test the features of KalikaScan by exploring areas around the SSU campus and taking photographs of various plant species. The application allows users to scan plants through their mobile devices, enabling the system to process images and assist in identifying plant species while generating preliminary digital records for biodiversity documentation.
The beta testing was facilitated by 𝐋𝐞𝐲𝐧𝐚𝐫𝐝 𝐌. 𝐏𝐞ñ𝐚𝐫𝐚𝐧𝐝𝐚, a BSIS student at SSU and the developer of KalikaScan, together with his team, and Mr. Andres Basa Sequito, a faculty researcher of ${CENTER_NAME}. Ms. Maryjes G. Calades was also present to supervise the activity. They guided the participating students through the proper use of the application, including image capture, scanning procedures, and the digital recording of plant information. The activity also allowed students to experience how emerging technologies can support biodiversity assessment and environmental research.
Through this beta testing, the development team gathered valuable feedback from the participants regarding the application’s usability, functionality, and performance in a real campus setting. The insights collected during the activity will help further improve KalikaScan before it is fully integrated into the biodiversity documentation activities of the arboretum project.
#SSUESRDC #SamarStateUniversity #WeInnovateWeBuildWeServe #KalikaScanApp #SSUBiodiversityArboretum
via 𝐉𝐮𝐬𝐭𝐲𝐧𝐞 𝐌𝐚𝐲𝐞 𝐍𝐚𝐛𝐚𝐛𝐥𝐢𝐭 | SSU-ESRDC`;

const descriptionFive = `𝗛𝗜𝗚𝗛𝗟𝗜𝗚𝗛𝗧𝗦 | The ${CENTER_NAME} proudly announces its recognitions during the recently concluded 𝟮𝟬𝟮𝟲 𝗥𝗗𝗘 𝗞𝗶𝗰𝗸-𝗢𝗳𝗳: 𝟭𝘀𝘁 𝗤𝘂𝗮𝗿𝘁𝗲𝗿 𝗣𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲 𝗥𝗲𝘃𝗶𝗲𝘄 𝗮𝗻𝗱 𝗔𝘄𝗮𝗿𝗱𝘀 𝗖𝗼𝗻𝘃𝗼𝗰𝗮𝘁𝗶𝗼𝗻, anchored on the theme, “Igniting Impact: Remember, Recognize, Refocus—Recalibrating the RDE Synergy for a Reimagined RDE Future.”
𝐄𝐒𝐑𝐃𝐂 bagged one of the major awards, the 𝐑𝐞𝐬𝐞𝐚𝐫𝐜𝐡 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐢𝐨𝐧 𝐄𝐱𝐜𝐞𝐥𝐥𝐞𝐧𝐜𝐞 𝐀𝐰𝐚𝐫𝐝, a prestigious institutional distinction recognizing the center's exceptional commitment to knowledge generation through the highest research productivity for 2025.
The center was also conferred the 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲 𝐂𝐨𝐦𝐦𝐞𝐫𝐜𝐢𝐚𝐥𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐀𝐰𝐚𝐫𝐝, presented to 𝐃𝐫. 𝐄𝐝𝐞𝐥𝐲𝐧 𝐎. 𝐄𝐜𝐡𝐚𝐩𝐚𝐫𝐞, in recognition of outstanding creativity, dedication, and exemplary contribution to innovation for successfully Licensing and Commercializing an IP.
In addition to these institutional recognitions, several ${CENTER_NAME}-assisted studies received the 𝐑𝐞𝐬𝐞𝐚𝐫𝐜𝐡 𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐀𝐰𝐚𝐫𝐝, highlighting the scholarly productivity and collaborative excellence. Awarded contributors include Anne Frances V. Buhay, Maria Celeste N. Banaticla-Hilario, Inocencio E. Buot, Jr., Jones T. Napaldet, Lailani Masungsong, Marne Origenes, Noba Hilvano, Edelyn O. Echapare, and Diane Shane Balindo.
A separate 𝐑𝐞𝐬𝐞𝐚𝐫𝐜𝐡 𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧 𝐀𝐰𝐚𝐫𝐝 was also granted to Valentyna Pleskach, Frank Angelo Pacala, Mary Jane Cinco, Rezy Mendaño, and Edelyn O. Echapare for their notable scholarly contributions. Notably, 𝐌𝐬. 𝐌𝐚𝐫𝐲 𝐉𝐚𝐧𝐞 𝐂𝐢𝐧𝐜𝐨 was further recognized with the 𝐁𝐞𝐬𝐭 𝐏𝐚𝐩𝐞𝐫 𝐀𝐰𝐚𝐫𝐝 (𝐒𝐨𝐜𝐢𝐚𝐥 𝐒𝐜𝐢𝐞𝐧𝐜𝐞 𝐓𝐫𝐚𝐜𝐤), underscoring the quality, relevance, and impact of her research.
Additionally, the publication by 𝐃𝐫. 𝐑𝐞𝐳𝐲 𝐌𝐞𝐧𝐝𝐚ñ𝐨 and 𝐅𝐫𝐚𝐧𝐤 𝐀𝐧𝐠𝐞𝐥𝐨 𝐏𝐚𝐜𝐚𝐥𝐚, which received cash incentive from SSU, was also recognized, further highlighting their exemplary contribution to research excellence.
These distinctions affirm ${CENTER_NAME}'s continuing pursuit of research excellence, innovation, and knowledge dissemination in the field of environmental sustainability.
#SSUESRDC #SamarStateUniversity #WeInnovateWeBuildWeServe #IgnitingImpact
via 𝐉𝐮𝐬𝐭𝐲𝐧𝐞 𝐌𝐚𝐲𝐞 𝐍𝐚𝐛𝐚𝐛𝐥𝐢𝐭 | SSU-ESRDC`;

const descriptionSix = `The ${CENTER_NAME}, in collaboration with the Eastern Visayas Center for Crustacean Research and Development (EVCRD), successfully hosted the 2026 SSU Student Research and Development Congress at Samar State University. The event gathered undergraduate and graduate student researchers from various colleges to showcase innovative studies, strengthen research capabilities, and promote interdisciplinary collaboration through plenary presentations, paper competitions, and recognition of outstanding research outputs.`;

const descriptionSeven = `The SSU Environmental Sustainability Research and Development Center (ESRDC) actively supports collaborative environmental governance through participation in the Protected Area Management Board (PAMB) of the Samar Island Natural Park.
Director Edelyn Oliverio-Echapare represented President Redentor S. Palencia during the PAMB meeting, joining DENR and partner stakeholders in advancing science-based decision-making, biodiversity conservation, and sustainable management of protected areas under the ENIPAS Act (RA 11038).
#WeInnovateWeBuildWeServe`;

const descriptionEight = `#𝗕𝗜𝗢𝗧𝗔𝗖𝗢𝗡 🧬 | The Samar State University (SSU), through its Environmental Sustainability Research and Development Center (ESRDC), co-hosted and sponsored the First Biology Teachers Association of the Philippines - Eastern Visayas Chapter (BIOTA-EV) Conference with the theme "Biology in a Changing Environment," held on February 5-6 at the University of the Philippines Visayas Tacloban College. The two-day conference gathered biology teachers, students, researchers, and environmental advocates from across Eastern Visayas to discuss current environmental and biological issues affecting the region. A key highlight of the event was the conduct of a Memorandum of Agreement (MOA) signing, which formalized and strengthened the partnership between SSU and BIOTA-EV, fostering future collaborative research and extension initiatives.
Dr. Edelyn O. Echapare played a vital role in the success of the conference, serving as one of the moderators and facilitating the discussions. During the event, she was also elected as the incoming President of BIOTA-EV, signifying strong recognition of her leadership and commitment to advancing the biological sciences in the region.
Meanwhile, Mr. Andres III B. Sequito, faculty researcher of SSU-ESRDC, was elected as Board Director at the tertiary level, highlighting his contribution to the academic community. He also presented his research paper entitled "Spatial Distribution and Density of Sub-Aquatic Vegetation in a Tropical River Using Sonar-Based Mapping," which provided valuable insights into aquatic ecosystem assessment and environmental monitoring.
#BIOTACON2026 #BIOTAEV #SamarStateUniversity #EnvironmentalSustainability #BiologyInAChangingEnvironment
via 𝐉𝐮𝐬𝐭𝐲𝐧𝐞 𝐌𝐚𝐲𝐞 𝐍𝐚𝐛𝐚𝐛𝐥𝐢𝐭 | SSU-ESRDC
photo courtesy of 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 𝐨𝐟 𝐭𝐡𝐞 𝐏𝐡𝐢𝐥𝐢𝐩𝐩𝐢𝐧𝐞𝐬 𝐓𝐚𝐜𝐥𝐨𝐛𝐚𝐧`;

const descriptionNine = `Grateful and proud moment for SSU's Environmental Sustainability Research and Development Center (ESRDC) 💚🌱
We extend our sincere appreciation to DENR-Samar Island Natural Park (DENR-SINP) for the Certificate of Commendation, recognizing Samar State University as one of the five (5) Outstanding Protected Area Management Board (PAMB) Members.
This recognition affirms ESRDC's sustained efforts in environmental research, policy support, and collaborative action toward biodiversity conservation and sustainable management of Samar's protected areas. We share this honor with our partners, stakeholders, and communities who continue to work with us in protecting our natural heritage.
Together, we move forward in strengthening science-based, community-centered, and impact-driven environmental stewardship. 🌏💚`;

const descriptionTen = `#𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗹𝗲𝗟𝗶𝘃𝗲𝗹𝗶𝗵𝗼𝗼𝗱𝘀 🌱 | Samar State University, through the Environmental Sustainability Research and Development Center (ESRDC), successfully implemented the Community-Based Forest Management Program: Strengthening Sustainable Livelihoods, Forest Governance, and Ecosystem Resilience on December 16 and 19, 2025 at Barangay San Isidro, Paranas, Samar.
This mid-phase activity of ESRDC Extension Program 025-08 focused on enhancing community livelihoods through banana pasta making, a value-added food processing initiative that utilizes locally available resources without adding pressure on forest ecosystems. The activity engaged members of BOSIS People's Organizations, in collaboration with selected Food Technology students from Samar State University, who served as technical demonstrators.
Participants took part in lectures and hands-on workshops covering banana-based pasta production, food safety, packaging and labeling, costing, marketing, and enterprise development. The activity strengthened community entrepreneurship skills while fostering experiential learning through meaningful academe-community partnerships.
Through innovation, collaboration, and sustainability, Samar State University continues to transform local resources into livelihood opportunities for resilient communities.
#SSUExtension #SSUESRDC #SamarStateUniversity #WeInnovateWeBuildWeServe #CommunityBasedForestManagement #BananaPastaMaking #FoodInnovation #EmpoweringCommunities
via 𝐉𝐮𝐬𝐭𝐲𝐧𝐞 𝐌𝐚𝐲𝐞 𝐍𝐚𝐛𝐚𝐛𝐥𝐢𝐭 | SSU-ESRDC`;

const descriptionEleven = `BSEd Science 1st Year Students joined the symposium on the 𝗔𝗴𝗶𝗹𝗮𝘆𝗮 𝗖𝗮𝗺𝗽𝗮𝗶𝗴𝗻: "𝗙𝗿𝗲𝗲 𝘁𝗵𝗲 𝗕𝗶𝗼𝗹𝗼𝗴𝗶𝗰𝗮𝗹 𝗧𝗿𝗲𝗮𝘀𝘂𝗿𝗲𝘀 𝗼𝗳 𝗦𝗮𝗺𝗮𝗿 𝗳𝗿𝗼𝗺 𝗛𝘂𝗺𝗮𝗻 𝗧𝗵𝗿𝗲𝗮𝘁𝘀", a powerful advocacy pushing for the protection of Samar's biological treasures against human-induced threats.
Held at the New CAS AVC on December 10, 2025, the event featured meaningful conversations, informative presentations, and passionate calls for environmental responsibility. Students gained a deeper understanding of how collective action can preserve the natural wonders that make Samar unique. 🌳🌊✨
📸: 𝘍𝘳𝘢𝘯𝘤𝘪𝘴 𝘚𝘪𝘮𝘰𝘯 𝘑𝘢𝘮𝘪𝘭𝘭𝘦`;

const descriptionTwelve = `#𝗔𝗚𝗜𝗟𝗔𝗬𝗔𝗦𝗮𝗺𝗮𝗿 🦅 | Samar State University, through the Environmental Sustainability Research and Development Center (ESRDC), successfully conducted the 𝐀𝐠𝐢𝐋𝐚𝐲𝐚 𝐂𝐚𝐦𝐩𝐚𝐢𝐠𝐧: 𝐅𝐫𝐞𝐞 𝐭𝐡𝐞 𝐁𝐢𝐨𝐥𝐨𝐠𝐢𝐜𝐚𝐥 𝐓𝐫𝐞𝐚𝐬𝐮𝐫𝐞𝐬 𝐨𝐟 𝐒𝐚𝐦𝐚𝐫 𝐟𝐫𝐨𝐦 𝐇𝐮𝐦𝐚𝐧 𝐓𝐡𝐫𝐞𝐚𝐭𝐬 on December 10, 2025, at New CAS AVR, SSU Main Campus, in partnership with the Philippine Eagle Foundation (PEF), DENR-Samar Island Natural Park (SINP), Philippine National Police, and various local government units across Samar.
The activity aimed to raise awareness on Samar's rich biodiversity-particularly its genetically distinct population of the Philippine Eagle-and to strengthen community action against illegal hunting, forest degradation, wildlife trade, and airgun use. Through expert lectures and advocacy exhibit, students, faculty, law enforcers, and community members were immersed in the science, challenges, and responsibilities of conserving Samar's forest ecosystems.
PEF representatives presented updated survey results revealing the critical status of the Philippine Eagle in Samar, while DENR-SINP discussed ongoing enforcement strategies to protect the island's forests and wildlife. The PNP, alongside SSU's ESRDC team, also emphasized the importance of community reporting and collaborative vigilance in addressing environmental crimes.
A powerful message resonated throughout the event: 👉 "𝗜𝘁 𝘁𝗮𝗸𝗲𝘀 𝗮 𝘃𝗶𝗹𝗹𝗮𝗴𝗲 𝘁𝗼 𝗿𝗮𝗶𝘀𝗲 𝗮 𝗰𝗵𝗶𝗹𝗱, 𝗯𝘂𝘁 𝗻𝗼𝘄, 𝗶𝘁 𝘁𝗮𝗸𝗲𝘀 𝘁𝗵𝗲 𝘄𝗼𝗿𝗹𝗱 𝘁𝗼 𝗿𝗮𝗶𝘀𝗲 𝗮 𝗽𝗮𝗶𝗿 𝗼𝗳 𝗲𝗻𝗱𝗮𝗻𝗴𝗲𝗿𝗲𝗱 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲 𝗘𝗮𝗴𝗹𝗲" This call reminds everyone that safeguarding our national bird requires shared commitment-from local residents to global conservation partners.
Through the AgiLaya initiative, SSU reinforces its dedication to sustainability education, community empowerment, and evidence-based environmental governance. The activity strengthens inter-agency collaboration and inspires students to become stewards of Samar's unparalleled natural heritage.
Together, we protect. Together, we rise for Samar's forests. 🌿🦅✨
#SaveOurEagles #ProtectSamarForests #BioverdiversityConservation #StopWildlifeHunting #EcoAwareness #SamarStateUniversity #SSUESRDC #WeInnovateWeBuildWeServe #SustainableSamar
via 𝐉𝐮𝐬𝐭𝐲𝐧𝐞 𝐌𝐚𝐲𝐞 𝐍𝐚𝐛𝐚𝐛𝐥𝐢𝐭 | SSU-ESRDC
photo courtesy of 𝐏𝐡𝐢𝐥𝐢𝐩𝐩𝐢𝐧𝐞 𝐄𝐚𝐠𝐥𝐞 𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧`;

const descriptionThirteen = `LOOK | 𝗙𝘂𝗲𝗹𝗶𝗻𝗴 𝗜𝗻𝗻𝗼𝘃𝗮𝘁𝗶𝗼𝗻 𝗮𝗻𝗱 𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗶𝗹𝗶𝘁𝘆: 𝗦𝗦𝗨-𝗘𝗦𝗥𝗗𝗖 𝗟𝗲𝗮𝗱𝘀 𝟮𝟬𝟮𝟲 𝗜𝗻-𝗛𝗼𝘂𝘀𝗲 𝗥𝗲𝘃𝗶𝗲𝘄 𝗼𝗳 𝗥𝗲𝘀𝗲𝗮𝗿𝗰𝗵 𝗮𝗻𝗱 𝗘𝘅𝘁𝗲𝗻𝘀𝗶𝗼𝗻 𝗣𝗿𝗼𝗽𝗼𝘀𝗮𝗹𝘀
The Environmental Sustainability Research and Development Center (ESRDC) of Samar State University (SSU) continues to champion innovation and sustainability through research excellence as it successfully conducted the 2026 In-House Review of Research and Extension Proposals on October 13-14, 2025, at the Audio-Visual Room, Research and Innovation Center.
The two-day event served as a dynamic platform for SSU faculty researchers and extension advocates to present their proposed projects for the upcoming funding year. Each proposal was meticulously evaluated to ensure alignment with the university's research thrusts, national development priorities, and the United Nations Sustainable Development Goals (SDGs).
Leading this milestone activity was Dr. Edelyn O. Echapare, ESRDC Director and Lead Coordinator, whose vision for sustainable, impact-driven research continues to inspire the SSU research community. Serving as evaluators were esteemed experts from both within and beyond the university: Dr. Ronald L. Orale (College of Engineering), Dr. Mary Rose B. Cerdeña (College of Education), Dr. Gino S. Sumalinog from Cebu Normal University, and Dr. Noba F. Hilvano from Eastern Samar State University - Salcedo Campus.
In his insightful remarks, Dr. Ronald L. Orale emphasized that true research goes beyond compliance and publication-it seeks to uncover the root causes of societal problems and develop solutions that transform lives and communities. "We conduct research not just to meet requirements, but to make a difference," he remarked, inspiring participants to pursue meaningful and responsive scientific inquiry.
The in-house review aimed to strengthen the quality, feasibility, and relevance of research and extension initiatives. Beyond evaluation, it fostered an environment of collaboration, critical discourse, and mentorship, encouraging faculty members to refine their ideas into actionable projects that respond to real-world challenges.
Through this annual review, SSU reaffirms its commitment to advancing research that drives innovation, promotes sustainability, and empowers communities. With every project proposed, the university moves closer to fulfilling its mission-to build knowledge that not only informs but transforms.
#SamarStateUniversity #SSUESRDC #WeInnovateWeBuildWeServe #ResearchForSustainability
via 𝐉𝐮𝐬𝐭𝐲𝐧𝐞 𝐌𝐚𝐲𝐞 𝐍𝐚𝐛𝐚𝐛𝐥𝐢𝐭 | SSU-ESRDC`;

const descriptionFourteen = `LOOK| 𝗦𝗦𝗨-𝗘𝗦𝗥𝗗𝗖 𝗟𝗲𝗮𝗱𝘀 𝗖𝗼𝗮𝘀𝘁𝗮𝗹 𝗮𝗻𝗱 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆 𝗖𝗹𝗲𝗮𝗻-𝗨𝗽 𝗗𝗿𝗶𝘃𝗲 𝗶𝗻 𝗖𝗲𝗹𝗲𝗯𝗿𝗮𝘁𝗶𝗼𝗻 𝗼𝗳 𝗜𝗻𝘁𝗲𝗿𝗻𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗖𝗼𝗮𝘀𝘁𝗮𝗹 𝗖𝗹𝗲𝗮𝗻𝗨𝗽 𝗗𝗮𝘆 2025
|𝑅𝑖𝑜 𝐶. 𝐶𝑒𝑐𝑜𝑔𝑜
In line with ESRDC Extension Program No. 025-10: 𝘊𝘭𝘦𝘢𝘯 𝘢𝘯𝘥 𝘎𝘳𝘦𝘦𝘯 𝘊𝘰𝘮𝘮𝘶𝘯𝘪𝘵𝘪𝘦𝘴: 𝘗𝘳𝘰𝘮𝘰𝘵𝘪𝘯𝘨 𝘌𝘯𝘷𝘪𝘳𝘰𝘯𝘮𝘦𝘯𝘵𝘢𝘭 𝘚𝘢𝘯𝘪𝘵𝘢𝘵𝘪𝘰𝘯, 𝘞𝘢𝘴𝘵𝘦 𝘔𝘢𝘯𝘢𝘨𝘦𝘮𝘦𝘯𝘵, 𝘢𝘯𝘥 𝘗𝘦𝘳𝘴𝘰𝘯𝘢𝘭 𝘏𝘺𝘨𝘪𝘦𝘯𝘦 𝘪𝘯 𝘜𝘯𝘥𝘦𝘳𝘴𝘦𝘳𝘷𝘦𝘥 𝘈𝘳𝘦𝘢𝘴 and in celebration of the 𝟮𝟬𝟮𝟱 𝗜𝗻𝘁𝗲𝗿𝗻𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗖𝗼𝗮𝘀𝘁𝗮𝗹 𝗖𝗹𝗲𝗮𝗻𝗨𝗽 𝗗𝗮𝘆, the Samar State University Environmental Sustainability Research and Development Center (SSU-ESRDC) spearheaded a Coastal and Community Clean-Up Drive last September 20, 2025 in Barangay Payao, Catbalogan City, Samar.
The activity was a collaborative effort between 𝗦𝗦𝗨-𝗘𝗦𝗥𝗗𝗖 led by its Center Director 𝗗𝗿. 𝗘𝗱𝗲𝗹𝘆𝗻 𝗢. 𝗘𝗰𝗵𝗮𝗽𝗮𝗿𝗲, the 𝗦𝗦𝗨 𝗡𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗦𝗲𝗿𝘃𝗶𝗰𝗲 𝗧𝗿𝗮𝗶𝗻𝗶𝗻𝗴 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 (𝗡𝗦𝗧𝗣) under the direction of 𝗠𝗿. 𝗟𝗲𝗮𝗻𝗱𝗿𝗼 𝗦𝗲𝘀𝗼 𝗖. 𝗖𝗿𝗲𝗯𝗲𝗹𝗹𝗼 𝗦𝗿, and 𝟴𝘁𝗵 𝗜𝗻𝗳𝗮𝗻𝘁𝗿𝘆 𝗗𝗶𝘃𝗶𝘀𝗶𝗼𝗻, 𝗣𝗵𝗶𝗹𝗶𝗽𝗽𝗶𝗻𝗲 𝗔𝗿𝗺𝘆, represented by 𝗠𝗚𝗘𝗡. 𝗔𝗱𝗼𝗻𝗶𝘀 𝗔𝗿𝗶𝗲𝗹 𝗚. 𝗢𝗿𝗶𝗼, 𝗣𝗔, Commander of Camp Lukban.
The event gathered the active participation of more than 200 NSTP student volunteers from Samar State University, alongside faculty and staff, who worked together in collecting plastic wastes, non-biodegradables, and other debris along the coastal and community areas. The initiative underscored the importance of environmental sanitation, proper waste management, and collective action in preserving coastal ecosystems and reducing the impacts of marine litter.
This community-driven activity does not only highlight SSU's commitment to environmental stewardship, but also reflects its thrust to contribute to national and global advocacies on sustainability. It further strengthens partnerships with local communities while empowering students to become champions of environmental protection.
Through this initiative, SSU-ESRDC reinforces its mission of building cleaner, greener, and more resilient communities-a step closer toward achieving the goals of sustainable development, climate action, and responsible stewardship of natural resources.
#InternationalCoastalCleanup2025 #CleanAndGreenCommunities #SamarStateUniversity #CommunityAction#SamarForSustainability #SSU #esrdc #WeInnovateWeBuildWeServe`;

const descriptionFifteen = `LOOK| 𝗙𝗿𝗼𝗺 𝗖𝗮𝗺𝗽𝘂𝘀 𝘁𝗼 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆: 𝗦𝗦𝗨 𝗖𝗵𝗮𝗺𝗽𝗶𝗼𝗻𝘀 𝗘𝗻𝘃𝗶𝗿𝗼𝗻𝗺𝗲𝗻𝘁𝗮𝗹 𝗔𝗰𝘁𝗶𝗼𝗻 𝗶𝗻 𝗕𝗮𝗿𝗮𝗻𝗴𝗮𝘆 𝗠𝗲𝗿𝗰𝗲𝗱𝗲𝘀, 𝗖𝗮𝘁𝗯𝗮𝗹𝗼𝗴𝗮𝗻 𝗖𝗶𝘁𝘆
𝑅𝑖𝑜 𝐶. 𝐶𝑒𝑐𝑜𝑔𝑜|
Samar State University, through the collaboration of its 𝗘𝗻𝘃𝗶𝗿𝗼𝗻𝗺𝗲𝗻𝘁𝗮𝗹 𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗥𝗲𝘀𝗲𝗮𝗿𝗰𝗵 𝗮𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗖𝗲𝗻𝘁𝗲𝗿, 𝗦𝗔𝗚𝗪𝗔𝗡, and 𝗡𝗦𝗧𝗣, spearheaded a meaningful Cleanup Drive Activity on Saturday, September 13, 2025, at Barangay Mercedes, Catbalogan City, Samar, bringing together a strong partnership between the academe and the local community in promoting environmental stewardship. Students and faculty members of SSU, alongside barangay officials, community, and youth leaders, actively participated in the initiative, which highlighted the university's commitment to fostering ecological awareness and responsibility while strengthening community engagement. The activity not only addressed immediate concerns on waste management but also served as a call for collective action in ensuring a cleaner and healthier environment for present and future generations.
#SSUCleanupDrive
#BarangayMercedesCleanup
#SSUForTheEnvironment
#SustainableFuture
#SSUCommunityAction
#ssu_esrdc
#WeInnovateWeBuildWeServe
#SSU`;

const descriptionSixteen = `LOOK| 𝗦𝗦𝗨-𝗘𝗦𝗥𝗗𝗖 𝗘𝗺𝗽𝗼𝘄𝗲𝗿𝘀 𝗕𝗮𝗿𝗮𝗻𝗴𝗮𝘆 𝗣𝗮𝘆𝗮𝗼 𝗧𝗵𝗿𝗼𝘂𝗴𝗵 𝗖𝗹𝗲𝗮𝗻 𝗮𝗻𝗱 𝗚𝗿𝗲𝗲𝗻 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝗶𝗲𝘀 𝗣𝗿𝗼𝗴𝗿𝗮𝗺
|𝑅𝑖𝑜 𝐶. 𝐶𝑒𝑐𝑜𝑔𝑜
The Samar State University-Environmental Sustainability Research and Development Center (SSU-ESRDC) strengthened its commitment to sustainable community development as it spearheaded a two-day extension activity in Barangay Payao, Catbalogan City, Samar on August 29, 2025 under 𝙀𝙭𝙩𝙚𝙣𝙨𝙞𝙤𝙣 𝙋𝙧𝙤𝙜𝙧𝙖𝙢 𝙉𝙤. 𝟬𝟮𝟱-𝟭𝟬, titled "𝐶𝑙𝑒𝑎𝑛 𝑎𝑛𝑑 𝐺𝑟𝑒𝑒𝑛 𝐶𝑜𝑚𝑚𝑢𝑛𝑖𝑡𝑖𝑒𝑠: 𝑃𝑟𝑜𝑚𝑜𝑡𝑖𝑛𝑔 𝐸𝑛𝑣𝑖𝑟𝑜𝑛𝑚𝑒𝑛𝑡𝑎𝑙 𝑆𝑎𝑛𝑖𝑡𝑎𝑡𝑖𝑜𝑛, 𝑊𝑎𝑠𝑡𝑒 𝑀𝑎𝑛𝑎𝑔𝑒𝑚𝑒𝑛𝑡, 𝑎𝑛𝑑 𝑃𝑒𝑟𝑠𝑜𝑛𝑎𝑙 𝐻𝑦𝑔𝑖𝑒𝑛𝑒 𝑖𝑛 𝑈𝑛𝑑𝑒𝑟𝑠𝑒𝑟𝑣𝑒𝑑 𝐴𝑟𝑒𝑎𝑠."
The activity aimed to raise awareness and enhance knowledge on sanitation, hygiene, and eco-friendly waste practices through surveys, community education, and information campaigns. Local residents actively participated, making the event both meaningful and community-centered.
On Day 2, the highlight was an awareness campaign featuring two key speakers. 𝗠𝘀. 𝗠𝗮𝗿𝘆 𝗔𝗻𝗻 𝗔𝗽𝗮𝗰𝗶𝗯𝗹𝗲 discussed Personal Hygiene, emphasizing proper handwashing, grooming, and disease prevention, especially vital for women and children as frontline advocates of health in their households. 𝗠𝗿. 𝗟𝗮𝘄𝗿𝗲𝗻𝗰𝗲 𝗤𝘂𝗶𝗻𝗰𝘆 𝗣𝗶𝗰𝘇𝗼𝗻 𝗤𝘂𝗶𝗮ñ𝗼, on the other hand, tackled Waste Management, stressing segregation, recycling, and sustainable practices that residents can adopt to build a cleaner and healthier barangay.
The program left a lasting impact on the community by equipping residents with practical knowledge, inspiring behavioral change, and fostering a shared responsibility for health and environmental care. More than just a one-time activity, it served as a stepping stone toward a healthier, greener, and more resilient Barangay Payao.
Through this initiative, SSU-ESRDC once again demonstrated the power of education, research, and extension services in driving positive change, aligning with both local and national goals for sustainable development and community empowerment.
#cleanandgreencommunities
#ssu_esrdc
#SustainableFuture
#BarangayPayao
#CommunityEmpowerment
#environmentalsustainability
#wastemanagement
#personalhygiene
#ssu_extension
#SSU
#WeInnovateWeBuildWeServe`;

const descriptionSeventeen = `LOOK| 𝗦𝗦𝗨 𝗖𝗼𝗻𝗱𝘂𝗰𝘁 𝗣𝗵𝗮𝘀𝗲 𝟮 𝗠𝗼𝗻𝗶𝘁𝗼𝗿𝗶𝗻𝗴 𝗼𝗳 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝘁𝘆-𝗕𝗮𝘀𝗲𝗱 𝗙𝗼𝗿𝗲𝘀𝘁 𝗠𝗮𝗻𝗮𝗴𝗲𝗺𝗲𝗻𝘁 𝗣𝗿𝗼𝗴𝗿𝗮𝗺 𝗶𝗻 𝗣𝗮𝗿𝗮𝗻𝗮𝘀, 𝗦𝗮𝗺𝗮𝗿
Paranas, Samar - August 15, 2025 - In the heart of Samar's forest landscapes, a collaborative team from 𝗦𝗮𝗺𝗮𝗿 𝗦𝘁𝗮𝘁𝗲 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 (𝗦𝗦𝗨), in partnership with the 𝗕𝗢𝗦𝗜𝗦 People's Organization, carried out Phase 2 Monitoring of the extension project "𝐶𝑜𝑚𝑚𝑢𝑛𝑖𝑡𝑦-𝐵𝑎𝑠𝑒𝑑 𝐹𝑜𝑟𝑒𝑠𝑡 𝑀𝑎𝑛𝑎𝑔𝑒𝑚𝑒𝑛𝑡 𝑃𝑟𝑜𝑔𝑟𝑎𝑚: 𝐸𝑛ℎ𝑎𝑛𝑐𝑖𝑛𝑔 𝑆𝑢𝑠𝑡𝑎𝑖𝑛𝑎𝑏𝑙𝑒 𝐹𝑜𝑟𝑒𝑠𝑡 𝑀𝑎𝑛𝑎𝑔𝑒𝑚𝑒𝑛𝑡 𝑇ℎ𝑟𝑜𝑢𝑔ℎ 𝐶𝑜𝑚𝑚𝑢𝑛𝑖𝑡𝑦-𝐵𝑎𝑠𝑒𝑑 𝐴𝑝𝑝𝑟𝑜𝑎𝑐ℎ𝑒𝑠." The activity, held at BOSIS Farm, Brgy. San Isidro, Paranas, brought together local organizations, women leaders, and community members in a shared mission to sustain forest resources for future generations.
The day began with a presentation and program overview for the local people's organizations, namely 𝗕𝗢𝗦𝗜𝗦 and the 𝗧𝗲𝗻𝗮𝗻𝗶 𝗢𝗿𝗴𝗮𝗻𝗶𝗰 𝗩𝗲𝗴𝗲𝘁𝗮𝗯𝗹𝗲 𝗣𝗿𝗼𝗱𝘂𝗰𝗲𝗿'𝘀 𝗔𝘀𝘀𝗼𝗰𝗶𝗮𝘁𝗶𝗼𝗻 (𝗧𝗢𝗩𝗣𝗔) - a Women's Group, to ensure that the stakeholders fully understood the program's goals and long-term vision. This was followed by an open consultation, where SSU and the organizations discussed their respective roles in implementing the project. The dialogue underscored that sustainable forest management is a shared responsibility, strengthened by both community participation and academic support.
Another significant part of the activity was the needs and challenges assessment, where participants shared their struggles in forest protection, seedling care, and balancing livelihood with conservation duties. These insights will allow SSU, through its 𝗘𝗻𝘃𝗶𝗿𝗼𝗻𝗺𝗲𝗻𝘁𝗮𝗹 𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗥𝗲𝘀𝗲𝗮𝗿𝗰𝗵 𝗮𝗻𝗱 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗖𝗲𝗻𝘁𝗲𝗿 (𝗘𝗦𝗥𝗗𝗖), to design targeted interventions that directly address community concerns and extend practical support.
The monitoring team, led by 𝗗𝗿. 𝗘𝗱𝗲𝗹𝘆𝗻 𝗢. 𝗘𝗰𝗵𝗮𝗽𝗮𝗿𝗲 of SSU ESRDC, included 𝗠𝗿. 𝗔𝗻𝗱𝗿𝗲𝘀 𝗜𝗜𝗜 𝗕. 𝗦𝗲𝗾𝘂𝗶𝘁𝗼 of SSU College of Education, along with UPLB researchers 𝗠𝘀. 𝗦𝘁𝗲𝗽𝗵𝗮𝗻𝗶𝗲 𝗗. 𝗗𝗶𝗺𝗮𝗹𝗮𝘁𝗮 and 𝗠𝗿. 𝗝𝗼𝗵𝗻 𝗥𝘆𝗮𝗻 𝗡𝗮𝘃𝗶𝗱𝗮𝗱. Their guidance ensured that both the technical and social aspects of forest management were carefully considered in partnership with the local organizations.
For SSU, this collaboration goes beyond a research initiative-it is a 𝗺𝗼𝗱𝗲𝗹 𝗼𝗳 𝗶𝗻𝘁𝗲𝗴𝗿𝗮𝘁𝗲𝗱 𝗰𝗼𝗻𝘀𝗲𝗿𝘃𝗮𝘁𝗶𝗼𝗻, combining science, education, and grassroots action. It also ties into larger efforts under the 𝐂𝐎𝐍𝐬𝐞𝐫𝐯𝐞-𝐊𝐀𝐈𝐆𝐀𝐍𝐆𝐀𝐍 𝐏𝐫𝐨𝐠𝐫𝐚𝐦, which advances the assessment and conservation of forest-over-limestone ecosystems in Samar Island. By working hand in hand with BOSIS, the Women's Group, and other community stakeholders, the program strengthens both ecological preservation and local empowerment.
As Phase 2 monitoring concludes, SSU and its partner people's organizations reaffirm their commitment to protecting Samar's forests. Together, they envision communities that are not only stewards of the land but also beneficiaries of its sustainable use, ensuring that Samar's rich biodiversity endures for generations to come.
#SustainableForests
#communitybasedconservation
#ssuforsustainability
#SSU_Extension
#forestmanagement
#BiodiversityConservation
#SamarIslandNaturalPark
#greensamar
#EcoPartnerships
#CommunityEmpowerment
#ConservationThroughCollaboration
#ScienceForCommunities
#climateactionph
#ForestsForFuture
#ssu_esrdc
#SSU
#WeInnovateWeBuildWeServe`;

const descriptionEighteen = `LOOK| "𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗕𝗲𝘁𝘁𝗲𝗿 𝗧𝗲𝘀𝘁𝘀": 𝗦𝗮𝗺𝗮𝗿 𝗖𝗼𝗹𝗹𝗲𝗴𝗲 𝗙𝗮𝗰𝘂𝗹𝘁𝘆 𝗨𝗽𝘀𝗸𝗶𝗹𝗹 𝗳𝗼𝗿 𝗦𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗹𝗲 𝗕𝗼𝗮𝗿𝗱 𝗧𝗲𝘀𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁
|𝑅𝑖𝑜 𝐶. 𝐶𝑒𝑐𝑜𝑔𝑜
The future of criminal justice in Samar just got a whole lot sharper. On Thursday, August 7, 2025, instructors from the 𝗖𝗼𝗹𝗹𝗲𝗴𝗲 𝗼𝗳 𝗖𝗿𝗶𝗺𝗶𝗻𝗮𝗹 𝗝𝘂𝘀𝘁𝗶𝗰𝗲 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 at Samar College, Inc. took a powerful step forward in their professional development. They participated in a dynamic one-day seminar, "𝐵𝑢𝑖𝑙𝑑𝑖𝑛𝑔 𝐵𝑒𝑡𝑡𝑒𝑟 𝑇𝑒𝑠𝑡𝑠: 𝐴 𝐶𝑜𝑚𝑝𝑟𝑒ℎ𝑒𝑛𝑠𝑖𝑣𝑒 𝑇𝑟𝑎𝑖𝑛𝑖𝑛𝑔 𝑊𝑜𝑟𝑘𝑠ℎ𝑜𝑝 𝑜𝑛 𝑆𝑢𝑠𝑡𝑎𝑖𝑛𝑎𝑏𝑙𝑒 𝐵𝑜𝑎𝑟𝑑 𝑇𝑒𝑠𝑡 𝐷𝑒𝑣𝑒𝑙𝑜𝑝𝑚𝑒𝑛𝑡 𝑎𝑛𝑑 𝐸𝑣𝑎𝑙𝑢𝑎𝑡𝑖𝑜𝑛," held in the college's bustling main library.
This isn't just about tests; it's about building a foundation for a more resilient society. The seminar officially began with welcome addresses from two key figures: 𝗠𝘀. 𝗠𝗮𝗿𝘆-𝗔𝗻𝗻 𝗗. 𝗔𝗯𝗮𝗶𝗴𝗮𝗿, the OIC-Dean of the College of Criminal Justice Education at Samar College, and 𝗗𝗿. 𝗘𝗱𝗲𝗹𝘆𝗻 𝗢. 𝗘𝗰𝗵𝗮𝗽𝗮𝗿𝗲, the Center Director of the SSU Environmental Sustainability Research and Development Center. This activity was part of a larger 𝗦𝗦𝗨 𝗘𝗦𝗥𝗗𝗖 𝗘𝘅𝘁𝗲𝗻𝘀𝗶𝗼𝗻 𝗔𝗰𝘁𝗶𝘃𝗶𝘁𝘆 focused on 𝗰𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻, 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻, 𝗮𝗻𝗱 𝗖𝗼𝗺𝗺𝘂𝗻𝗶𝗰𝗮𝘁𝗶𝗼𝗻 (𝗜𝗘𝗖) 𝗺𝗮𝘁𝗲𝗿𝗶𝗮𝗹𝘀 for climate change and disaster risk reduction. The connection is clear: just as strong foundations are needed for buildings, strong educational tools are needed to prepare future leaders for real-world challenges.
Expert speakers 𝗗𝗿. 𝗡𝗶𝗰𝗼𝗹𝗮𝘀 𝗢. 𝗕𝗼𝗰𝗼 and 𝗠𝗿. 𝗔𝗻𝗱𝗿𝗲𝘀 𝗜𝗜𝗜 𝗕. 𝗦𝗲𝗾𝘂𝗶𝘁𝗼 guided the instructors through the ins and outs of creating assessments that are not only fair and accurate but also sustainable. The skills gained here will empower educators to design tests that truly measure a student's readiness, ensuring that the next generation of criminal justice professionals is well-equipped to serve and protect their communities. This workshop is a testament to the college's commitment to excellence and its proactive role in shaping a better future for Samar.
#ProfessionalDevelopment #AcademicExcellence #skillsbuilding #CriminalJusticeEducation #SamarCollege #SSU #ssu_esrdc #ssu #WeInnovateWeBuildWeServe`;

const descriptionNineteen = `LOOK| 𝗦𝗦𝗨, 𝗟𝗚𝗨 𝗖𝗮𝘁𝗯𝗮𝗹𝗼𝗴𝗮𝗻, 𝗮𝗻𝗱 𝗔𝗿𝗴𝗼𝘁𝗲𝗸 𝗝𝗼𝗶𝗻 𝗙𝗼𝗿𝗰𝗲𝘀 𝗳𝗼𝗿 𝗔𝗻𝘁𝗶𝗮𝗼 𝗥𝗶𝘃𝗲𝗿 𝗖𝗼𝗻𝘀𝗲𝗿𝘃𝗮𝘁𝗶𝗼𝗻
|𝑅𝑖𝑜 𝐶. 𝐶𝑒𝑐𝑜𝑔𝑜
In a landmark tripartite collaboration, 𝐒𝐚𝐦𝐚𝐫 𝐒𝐭𝐚𝐭𝐞 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 (𝐒𝐒𝐔), 𝐭𝐡𝐞 𝐂𝐢𝐭𝐲 𝐆𝐨𝐯𝐞𝐫𝐧𝐦𝐞𝐧𝐭 𝐨𝐟 𝐂𝐚𝐭𝐛𝐚𝐥𝐨𝐠𝐚𝐧, and 𝐀𝐫𝐠𝐨𝐭𝐞𝐤 𝐏𝐨𝐬𝐢𝐭𝐢𝐨𝐧𝐢𝐧𝐠 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬, 𝐈𝐧𝐜. have united to advance environmental conservation efforts on the Antiao River. A highly successful two-day sonar mapping and data-gathering project was completed on August 2-3, 2025, a crucial step in securing the river's ecological future.
The initiative, officially designated as the "𝙀𝙘𝙤𝙡𝙤𝙜𝙞𝙘𝙖𝙡 𝘼𝙨𝙨𝙚𝙨𝙨𝙢𝙚𝙣𝙩 𝙖𝙣𝙙 𝘾𝙤𝙣𝙨𝙚𝙧𝙫𝙖𝙩𝙞𝙤𝙣 𝙤𝙛 𝙎𝙪𝙗𝙖𝙦𝙪𝙖𝙩𝙞𝙘 𝙑𝙚𝙜𝙚𝙩𝙖𝙩𝙞𝙤𝙣 𝙞𝙣 𝘼𝙣𝙩𝙞𝙖𝙤 𝙍𝙞𝙫𝙚𝙧, 𝘾𝙖𝙩𝙗𝙖𝙡𝙤𝙜𝙖𝙣" (𝙎𝙎𝙐 𝙀𝙎𝙍𝘿𝘾 𝙍𝘿 𝙋𝙍𝙊𝙅. 025-03), aims to secure the long-term health of this vital waterway. The project involved a dedicated team of experts from all three collaborating organizations.
Led by SSU's Project Leader, 𝗠𝗿. 𝗔𝗻𝗱𝗿𝗲𝘀 𝗜𝗜𝗜 𝗕. 𝗦𝗲𝗾𝘂𝗶𝘁𝗼, and under the guidance of ESRDC Director Dr. 𝗘𝗱𝗲𝗹𝘆𝗻 𝗢. 𝗘𝗰𝗵𝗮𝗽𝗮𝗿𝗲, the team utilized cutting-edge sonar technology provided by Argotek Positioning Solutions, Inc. Meticulous mapping of the river's topography and subaquatic vegetation was conducted by expert operators 𝗥𝗼𝗹𝗮𝗻𝗱𝗼 𝗠. 𝗔𝗹𝗳𝗮𝗿𝗼 and 𝗘𝗹𝗶𝗻𝗼 𝗙. 𝗕𝗲𝗿𝗻𝗮𝗿𝗱𝗼, covering the entire stretch from Barangay Mercedes to Barangay San Andres.
The Catbalogan City LGU's commitment was evident through the active 𝗠𝗿. 𝗙𝗿𝗮𝗻𝗰𝗶𝘀 𝗘. 𝗟𝗲𝗷𝗮𝘀 and 𝗠𝗿. 𝗖𝗵𝗿𝗶𝘀𝘁𝗶𝗮𝗻 𝗗𝗮𝘃𝗲 𝗩. 𝗔𝗹𝘃𝗮𝗿𝗲𝘇 from the 𝗗𝗲𝗽𝗮𝗿𝘁𝗺𝗲𝗻𝘁 𝗼𝗳 𝗔𝗴𝗿𝗶𝗰𝘂𝗹𝘁𝘂𝗿𝗲, led by City Agriculturist 𝗥𝗮𝗳𝗮𝗲𝗹 𝗟𝗮𝘂𝗱𝗲𝗿𝗲𝘀. Their presence underscores the local government's strong support for this scientific endeavor. The comprehensive data on the river's ecosystem and topography will be invaluable in developing effective, science-based conservation strategies, ensuring the Antiao River remains a thriving natural resource for generations. This powerful collaboration sets a new standard for environmental protection in the region.
#wowantiao #SSU #ssu_esrdc #Argotek #CatbaloganCitySamar #fypシ゚viralシ`;

const descriptionTwenty = `LOOK| 𝗠𝗮𝘁𝘂𝗴𝘂𝗶𝗻𝗮𝗼 𝗟𝗚𝗨 𝗮𝗻𝗱 𝗦𝗦𝗨 𝗙𝗼𝗿𝗴𝗲 𝗣𝗮𝗿𝘁𝗻𝗲𝗿𝘀𝗵𝗶𝗽 𝗳𝗼𝗿 𝗖𝗟𝗨𝗣 𝗘𝗻𝗵𝗮𝗻𝗰𝗲𝗺𝗲𝗻𝘁!
Today, July 23, 2025, marked a significant step forward for Matuguinao, Samar, as its Local Government Unit (LGU) met with Samar State University (SSU) at the SSU SmartLab Room. Led by Municipal Mayor 𝐇𝐨𝐧. 𝐀𝐫𝐚𝐧 𝐃. 𝐁𝐨𝐥𝐥𝐞𝐫, the LGU team collaborated with SSU's experts, including 𝐃𝐫. 𝐄𝐝𝐞𝐥𝐲𝐧 𝐄𝐜𝐡𝐚𝐩𝐚𝐫𝐞, 𝐄𝐧𝐠𝐫. 𝐌𝐢𝐫𝐚𝐝𝐨𝐫 𝐋𝐚𝐛𝐫𝐚𝐝𝐨𝐫, 𝐚𝐧𝐝 𝐄𝐧𝐠𝐫. 𝐋𝐚𝐝𝐲 𝐀𝐧𝐧 𝐅𝐚𝐛𝐢𝐥𝐥𝐚𝐫 to kickstart the enhancement of Matuguinao's Comprehensive Land Use Plan (CLUP).
The program included crucial discussions on Matuguinao's CLUP needs, SSU's technical assistance offerings, and intensive technical consultation and action planning. This partnership aims to create a more robust and responsive land use framework for the municipality's sustainable development.
#matuguinaolgu #SSU #clupenhancement #sustainabledevelopment #partnership`;

const descriptionTwentyOne = `𝗜𝗴𝗻𝗶𝘁𝗶𝗻𝗴 𝗖𝘂𝗿𝗶𝗼𝘀𝗶𝘁𝘆: 𝗖𝗮𝘁𝗯𝗮𝗹𝗼𝗴𝗮𝗻 𝗧𝗲𝗮𝗰𝗵𝗲𝗿𝘀 𝗘𝗺𝗯𝗿𝗮𝗰𝗲 𝗜𝗻𝗻𝗼𝘃𝗮𝘁𝗶𝘃𝗲 𝗣𝗵𝘆𝘀𝗶𝗰𝘀 𝗧𝗿𝗮𝗶𝗻𝗶𝗻𝗴
On Friday, July 18, 2025, Catbalogan City's science education received a significant boost with the conclusion of the "𝑻𝒓𝒂𝒊𝒏𝒆𝒓𝒔' 𝑻𝒓𝒂𝒊𝒏𝒊𝒏𝒈 𝒐𝒏 𝒕𝒉𝒆 𝑼𝒔𝒆 𝒐𝒇 𝑺𝒎𝒂𝒓𝒕𝒑𝒉𝒐𝒏𝒆-𝑩𝒂𝒔𝒆𝒅 𝑷𝒉𝒚𝒔𝒊𝒄𝒔 𝑬𝒙𝒑𝒆𝒓𝒊𝒎𝒆𝒏𝒕𝒔 𝒕𝒐 𝑰𝒎𝒑𝒓𝒐𝒗𝒆 𝑻𝒆𝒂𝒄𝒉𝒊𝒏𝒈 𝒂𝒏𝒅 𝑳𝒆𝒂𝒓𝒏𝒊𝒏𝒈." This five-day program, held at Samar State University's CAS Academic Building, Physics Laboratory, equipped 20 secondary science teachers with innovative tools to enhance physics education.
This monumental stride in education was forged through a dynamic and impactful collaboration - a true testament to the strong partnership between 𝑺𝒂𝒎𝒂𝒓 𝑺𝒕𝒂𝒕𝒆 𝑼𝒏𝒊𝒗𝒆𝒓𝒔𝒊𝒕𝒚, its distinguished 𝑮𝒓𝒂𝒅𝒖𝒂𝒕𝒆 𝑺𝒄𝒉𝒐𝒐𝒍 (𝑮𝑺), the proactive 𝑬𝒏𝒗𝒊𝒓𝒐𝒏𝒎𝒆𝒏𝒕𝒂𝒍 𝑺𝒖𝒔𝒕𝒂𝒊𝒏𝒂𝒃𝒊𝒍𝒊𝒕𝒚 𝑹𝒆𝒔𝒆𝒂𝒓𝒄𝒉 𝒂𝒏𝒅 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒎𝒆𝒏𝒕 𝑪𝒆𝒏𝒕𝒆𝒓 (𝑬𝑺𝑹𝑫𝑪), and the crucial 𝑫𝒆𝒑𝑬𝒅 𝑺𝒄𝒉𝒐𝒐𝒍𝒔 𝑫𝒊𝒗𝒊𝒔𝒊𝒐𝒏 𝒐𝒇 𝑪𝒂𝒕𝒃𝒂𝒍𝒐𝒈𝒂𝒏 𝑪𝒊𝒕𝒚, Leading this transformative journey was the visionary Project Leader, 𝑫𝒓. 𝑹𝒆𝒛𝒚 𝑴𝒆𝒏𝒅𝒂ñ𝒐.
The training week surged to life with an exceptionally captivating and insightful session led by 𝑴𝒓. 𝑭𝒓𝒂𝒏𝒌 𝑨𝒏𝒈𝒆𝒍𝒐 𝑨. 𝑷𝒂𝒄𝒂𝒍𝒂, a distinguished Lead Physics Teacher from the Presidential School of Uzbekistan. His profound expertise on smartphone-based physics experiments and the often-underestimated, yet fundamental, skill of precise data collection using smartphone sensors immediately ignited a palpable enthusiasm and curiosity among all participants.
Throughout the intensive week, our dedicated teachers dove deep, mastering the intricate functionalities of smartphone sensors, sharpening their data analysis and interpretation skills, and, most excitingly, conducting dynamic, hands-on experiments that brought complex theoretical physics vividly and tangibly to life. The program's pinnacle achievement? Participants weren't just learning; they were innovating - meticulously crafting research articles that powerfully showcase their newfound ability to design and execute small-scale research. This is a pivotal, forward-looking step towards potential publication in highly reputable journals, set to truly elevate the standard of local scientific inquiry!
This isn't merely about new teaching techniques; it's about igniting a profound and lasting passion for discovery, making physics more accessible, engaging, and incredibly exciting for every student in Catbalogan City.`;

const descriptionTwentyTwo = `The Samar State University Environmental Sustainability Research and Development Center (ESRDC) collaborated with Ms. Clarissa Mae P. Escalona, a researcher from the University of the Philippines Los Baños (UPLB), providing support for her field study. This collaboration spanned eleven weekdays between May 13th and 29th, 2025. The ESRDC expresses its gratitude to Ms. Escalona for the opportunity to participate and for the valuable experience gained through this collaborative fieldwork.`;

const descriptionTwentyThree = `Northwest Samar State University (NwSSU) has inked a memorandum of understanding (MOU) with three other state universities on Samar Island to develop cooperation through collaborative activities in academic areas of interest. The partner universities are Eastern Samar State University (ESSU), Samar State University (SSU), and the University of Eastern Philippines (UEP).`;

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
    title: `${CENTER_NAME} Hosts 2026 SSU Student Research and Development Congress`,
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
    title: `SSU-ESRDC Strengthens Partnerships for Gender-Responsive and Sustainable Youth Development`,
    description: descriptionThree,
    img: "/carousel-list-images/3.jpg",
    date: "March 18, 2026",
  },
  {
    id: 4,
    title: `SSU-ESRDC Advances Digital Biodiversity Monitoring Through KalikaScan Beta Testing`,
    description: descriptionFour,
    img: "/carousel-list-images/4.jpg",
    date: "March 05, 2026",
    extraImg: "/kalikascan.png",
    videoLink: "https://youtu.be/IeY4rr_2zDg",
  },
  {
    id: 5,
    title: `SSU-ESRDC Shines at 2026 RDE Kick-Off with Multiple Research and Innovation Awards`,
    description: descriptionFive,
    img: "/carousel-list-images/5.jpg",
    date: "March 05, 2026",
  },
  {
    id: 7,
    title: `SSU-ESRDC Strengthens Environmental Governance Through Participation in SINP-PAMB`,
    description: descriptionSeven,
    img: "/carousel-list-images/7.jpg",
    date: "February 22, 2026",
  },
  {
    id: 8,
    title:
      "SSU-ESRDC Co-hosts First BIOTA-EV Conference on Biology in a Changing Environment",
    description: descriptionEight,
    img: "/carousel-list-images/8.jpg",
    date: "February 16, 2026",
  },
  {
    id: 9,
    title: "SSU-ESRDC Recognized as Outstanding PAMB Member by DENR-SINP",
    description: descriptionNine,
    img: "/carousel-list-images/9.jpg",
    date: "February 06, 2026",
  },
  {
    id: 10,
    title:
      "SSU-ESRDC Strengthens Sustainable Livelihoods Through Community-Based Forest Management Program",
    description: descriptionTen,
    img: "/carousel-list-images/10.jpg",
    date: "December 22, 2025",
  },
  {
    id: 11,
    title:
      "BSEd Science Students Join Agilaya Campaign for Samar’s Biodiversity Protection",
    description: descriptionEleven,
    img: "/carousel-list-images/11.jpg",
    date: "December 11, 2025",
  },
  {
    id: 12,
    title:
      "SSU-ESRDC Leads AgiLaya Campaign to Protect Samar’s Biological Treasures",
    description: descriptionTwelve,
    img: "/carousel-list-images/12.jpg",
    date: "December 11, 2025",
  },
  {
    id: 13,
    title:
      "SSU-ESRDC Leads 2026 In-House Review of Research and Extension Proposals",
    description: descriptionThirteen,
    img: "/carousel-list-images/13.jpg",
    date: "October 17, 2025",
  },
  {
    id: 14,
    title:
      "SSU-ESRDC Leads Coastal and Community Clean-Up Drive for International Coastal Cleanup Day 2025",
    description: descriptionFourteen,
    img: "/carousel-list-images/14.jpg",
    date: "September 22, 2025",
  },
  {
    id: 15,
    title:
      "SSU-ESRDC, SAGWAN, and NSTP Unite for Community Clean-Up Initiative",
    description: descriptionFifteen,
    img: "/carousel-list-images/15.jpg",
    date: "September 13, 2025",
  },
  {
    id: 16,
    title:
      "SSU-ESRDC Empowers Barangay Payao Through Clean and Green Communities Program",
    description: descriptionSixteen,
    img: "/carousel-list-images/16.jpg",
    date: "August 29, 2025",
  },
  {
    id: 17,
    title:
      "SSU-ESRDC Conducts Phase 2 Monitoring of Community-Based Forest Management Program in Paranas, Samar",
    description: descriptionSeventeen,
    img: "/carousel-list-images/17.jpg",
    date: "August 17, 2025",
  },
  {
    id: 18,
    title:
      "SSU-ESRDC Conducts Seminar on Sustainable Board Test Development for Samar College Faculty",
    description: descriptionEighteen,
    img: "/carousel-list-images/18.jpg",
    date: "August 07, 2025",
  },
  {
    id: 19,
    title:
      "SSU-ESRDC, LGU Catbalogan, and Argotek Unite for Antiao River Conservation Initiative",
    description: descriptionNineteen,
    img: "/carousel-list-images/19.jpg",
    date: "August 04, 2025",
  },
  {
    id: 20,
    title:
      "SSU-ESRDC, Matuguinao LGU and SSU Partner for Comprehensive Land Use Plan Enhancement",
    description: descriptionTwenty,
    img: "/carousel-list-images/20.jpg",
    date: "July 23, 2025",
  },
  {
    id: 21,
    title:
      "SSU-ESRDC, Igniting Curiosity: Catbalogan Teachers Embrace Innovative Smartphone-Based Physics Training",
    description: descriptionTwentyOne,
    img: "/carousel-list-images/21.jpg",
    date: "July 19, 2025",
  },
  {
    id: 22,
    title:
      "SSU-ESRDC Collaborates with UPLB Researcher for Field Study Support",
    description: descriptionTwentyTwo,
    img: "/carousel-list-images/22.jpg",
    date: "May 30, 2025",
  },
  {
    id: 23,
    title:
      "NwSSU, ESSU, SSU, and UEP Forge Academic Partnership Through MOU Signing",
    description: descriptionTwentyThree,
    img: "/carousel-list-images/23.png",
    date: "May 15, 2025",
    extraLink:
      "https://nwssu.edu.ph/2025/05/15/nwssu-inks-mou-for-samar-inter-university-educ-pact/?fbclid=IwY2xjawRjzq9leHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe6loND86D0qy-RDmEWfOENPhmvdaIf244ImdYSBmR0P7ejgpo4jDcK5_c1d8_aem_6Bc-y8T3PxOeccz24CLPoQ",
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
                {item.extraLink ? (
                  <a
                    href={item.extraLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit text-sm font-semibold text-slate-950 underline decoration-slate-400 underline-offset-4 transition-colors hover:text-slate-700"
                    style={{ textDecorationLine: "underline" }}
                  >
                    Visit for more information
                  </a>
                ) : null}
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
