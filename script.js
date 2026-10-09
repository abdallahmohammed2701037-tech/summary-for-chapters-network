const mediaTypes = [
    {
        name: "Transmission Media",
        subtitle: "The communication path",
        self: "I am the path that carries data from one device to another. I can use physical cables or send signals through the air.",
        ar: "أنا الطريق اللي البيانات بتمشي فيه من جهاز لجهاز تاني. ممكن أكون كابل فعلي، وممكن أنقل الإشارات من خلال الهوا.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
        advantage: "I provide the communication path that allows devices to exchange information.",
        advantageAr: "من غيري الأجهزة مش هتقدر تتبادل البيانات. أنا الوسيلة اللي بتوصل المعلومة من المرسل للمستقبل.",
        disadvantage: "My speed, distance, cost, and reliability depend on the medium being used.",
        disadvantageAr: "مش كل وسيلة عندي زي التانية؛ فيه أنواع سريعة وغالية، وأنواع أرخص لكن ممكن تتأثر بالتشويش أو المسافة.",
        types: [
            {
                name: "Guided Media",
                en: "I carry signals through a physical path, such as a cable.",
                ar: "أنا بنقل البيانات جوه مسار مادي زي الكابلات النحاسية أو الألياف الضوئية."
            },
            {
                name: "Unguided Media",
                en: "I carry signals through the air without a physical cable.",
                ar: "أنا بنقل الإشارات في الهوا، زي الواي فاي وبعض أنواع الاتصالات اللاسلكية."
            }
        ]
    },
    {
        name: "Twisted Pair",
        subtitle: "Two twisted copper wires",
        self: "I consist of pairs of insulated copper wires twisted together. I am commonly used in Ethernet LANs and telephone systems.",
        ar: "أنا كابل جواه أسلاك نحاس، وكل سلكين بيتلفّوا حوالين بعض لتقليل تأثير التشويش. هتلاقيني كتير في كابلات الشبكات والإنترنت.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
        advantage: "I am relatively inexpensive, flexible, and easy to install.",
        advantageAr: "أنا مش غالي زي الألياف الضوئية، وسهل تركيبي وصيانتي، ومناسب جدًا لتوصيل أجهزة الكمبيوتر بالشبكة داخل المباني.",
        disadvantage: "I can be affected by interference and signal attenuation, especially over longer distances.",
        disadvantageAr: "لو المسافة زادت الإشارة ممكن تضعف، وكمان التشويش الكهرومغناطيسي ممكن يأثر عليّ، حسب نوعي والبيئة اللي بشتغل فيها.",
        types: [
            {
                name: "UTP — Unshielded Twisted Pair",
                en: "I have no additional metallic shielding around my wire pairs.",
                ar: "أنا النوع العادي من كابلات الشبكات، مفيش حوالين الأسلاك طبقة تدريع معدنية إضافية، وعشان كده أنا اقتصادي وسهل الاستخدام."
            },
            {
                name: "STP — Shielded Twisted Pair",
                en: "I use additional shielding to help reduce electromagnetic interference.",
                ar: "أنا عندي تدريع إضافي بيساعد يقلل التشويش، لكن ممكن أكون أغلى وتحتاج عملية تركيبي اهتمامًا أكبر."
            }
        ]
    },
    {
        name: "Coaxial Cable",
        subtitle: "A central conductor",
        self: "I carry electrical signals through a central conductor surrounded by insulation and metallic shielding.",
        ar: "أنا كابل فيه سلك موصل في النص، حواليه عازل وطبقة تدريع. التصميم ده بيساعدني أنقل الإشارات مع تقليل تأثير التشويش الخارجي.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
        advantage: "My shielding helps protect signals from external interference, and I can support broadband communication.",
        advantageAr: "طبقة التدريع عندي بتساعد تحمي الإشارة من التشويش، وعشان كده هتلاقيني في بعض أنظمة التلفزيون والإنترنت.",
        disadvantage: "I can be thicker and less flexible than twisted-pair cable, and installation may be more difficult.",
        disadvantageAr: "أنا أسمك وأقل مرونة من كابل Twisted Pair غالبًا، وتركيبي ممكن يكون أصعب، واستخدامي بيعتمد على طبيعة الشبكة.",
        types: [
            {
                name: "Baseband Coaxial",
                en: "I traditionally carry a digital signal using the channel as a whole.",
                ar: "أنا بنقل الإشارة الرقمية باستخدام القناة كلها، وده مفهوم مرتبط ببعض تصاميم الشبكات القديمة."
            },
            {
                name: "Broadband Coaxial",
                en: "I can carry signals in different frequency bands.",
                ar: "أنا بقدر أنقل إشارات في نطاقات تردد مختلفة، وده بيساعد في تطبيقات زي توزيع التلفزيون وبعض خدمات الإنترنت."
            }
        ]
    },
    {
        name: "Fiber Optic",
        subtitle: "Data carried by light",
        self: "I transmit information as pulses of light through thin glass or plastic fibers. I support high bandwidth and resist electromagnetic interference.",
        ar: "أنا بنقل البيانات على هيئة نبضات ضوء جوه ألياف رفيعة جدًا. بتميز بالسرعة العالية، وبقدر أنقل البيانات لمسافات طويلة، والتشويش الكهرومغناطيسي مش بيأثر على الضوء اللي ماشي جوايا.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
        advantage: "I offer high bandwidth, low signal loss over long distances, and immunity to electromagnetic interference.",
        advantageAr: "أنا ممتاز لما تحتاج سرعة عالية ومسافة طويلة، ومش بتأثر بالتشويش الكهرومغناطيسي زي الكابلات النحاسية. عشان كده بستخدم في العمود الفقري للشبكات الكبيرة.",
        disadvantage: "I can cost more to install, and my connectors and splicing may require specialized equipment and skills.",
        disadvantageAr: "أنا مش دايمًا الأرخص؛ أجهزة التوصيل واللحام بتاعتي ممكن تكون مكلفة، وكمان محتاج أدوات وخبرة في التركيب والصيانة.",
        types: [
            {
                name: "Single-Mode Fiber",
                en: "I carry light through a very small core and am suitable for long-distance communication.",
                ar: "أنا قلبي الداخلي صغير جدًا، ومناسب لنقل البيانات لمسافات طويلة بكفاءة عالية."
            },
            {
                name: "Multimode Fiber",
                en: "I allow multiple light paths and are commonly used for shorter links, such as within buildings or data centers.",
                ar: "أنا بسمح لأكتر من مسار للضوء جوه الليف، وبناسب المسافات الأقصر زي الربط بين الأجهزة داخل المباني ومراكز البيانات."
            }
        ]
    },
    {
        name: "Radio Waves",
        subtitle: "Wireless communication",
        self: "I carry electromagnetic signals through the air. Depending on my frequency and the environment, I can spread in different directions and support wireless communication.",
        ar: "أنا موجات لاسلكية بتتنقل في الهوا، ومش محتاجة كابل يربط الجهاز بالجهاز التاني. طريقة انتشاري بتختلف حسب التردد والمكان اللي أنا فيه.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
        advantage: "I support mobility and can cover areas without requiring a cable connection.",
        advantageAr: "ميزتي إني بخلّي الأجهزة تتواصل وهي متحركة ومن غير كابلات، وده أساس شبكات لاسلكية كتير.",
        disadvantage: "I may be affected by interference, obstacles, and security risks if the network is not properly protected.",
        disadvantageAr: "ممكن إشاراتي تتأثر بتداخل الإشارات أو الحواجز، ولازم الشبكة تتأمّن كويس عشان البيانات ما تبقاش معرضة للوصول غير المصرح به.",
        types: [
            {
                name: "Broadcast Radio",
                en: "I can spread signals to multiple receivers over an area.",
                ar: "أنا ممكن أبعت الإشارة لأكتر من مستقبل في نطاق معين، حسب النظام المستخدم."
            },
            {
                name: "Wireless LAN Radio",
                en: "I help devices connect to local networks wirelessly, as in Wi-Fi.",
                ar: "أنا اللي بساعد الأجهزة تتصل بالشبكة لاسلكيًا، زي الاتصال بالراوتر عن طريق الواي فاي."
            }
        ]
    },
    {
        name: "Microwaves",
        subtitle: "Directional wireless signals",
        self: "I use high-frequency electromagnetic waves. Many of my communication links use directional antennas and require a clear line of sight.",
        ar: "أنا موجات بترددات عالية، وبستخدم غالبًا هوائيات بتوجّه الإشارة ناحية نقطة معينة. في اتصالات كتير من نوعي لازم يكون فيه مسار واضح بين الهوائيات.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
        advantage: "I can provide high-capacity wireless links between distant locations without laying a cable along the entire route.",
        advantageAr: "أقدر أوصل بيانات بين مكانين بعيدين من غير ما تمد كابل على طول المسافة كلها، وده مفيد في ربط المواقع.",
        disadvantage: "Obstacles and weather conditions can affect some links, and suitable antenna alignment may be necessary.",
        disadvantageAr: "لو فيه مبنى أو حاجز في المسار ممكن يعطّل الإشارة، وبعض أنواع اتصالاتي بتتأثر بالطقس، وكمان الهوائيات لازم تتظبط صح.",
        types: [
            {
                name: "Terrestrial Microwave",
                en: "I transmit signals between ground-based antennas.",
                ar: "أنا بربط هوائيات موجودة على الأرض، وممكن أستخدم في توصيل شبكات بين مبانٍ أو مواقع بعيدة."
            },
            {
                name: "Satellite Microwave",
                en: "I use satellites to relay signals between distant locations.",
                ar: "أنا بستخدم الأقمار الصناعية عشان الإشارة توصل بين أماكن بعيدة جدًا، حتى لو البنية التحتية الأرضية محدودة."
            }
        ]
    },
    {
        name: "Infrared",
        subtitle: "Short-range communication",
        self: "I use infrared light to transmit information over short distances. I generally cannot pass through walls.",
        ar: "أنا بستخدم ضوء الأشعة تحت الحمراء لنقل البيانات لمسافات قصيرة. الحواجز زي الحيطان بتمنعني غالبًا من الوصول للطرف التاني.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
        advantage: "I can provide short-range communication and generally do not pass through walls, which can help limit signals to a room.",
        advantageAr: "أنا مناسب للاتصالات القريبة، وبما إني غالبًا مش بقدر أعدّي من الحيطان، فده ممكن يقلل وصول الإشارة لغرف تانية.",
        disadvantage: "I have limited range and can be blocked by obstacles, and strong ambient light may interfere with some systems.",
        disadvantageAr: "مدى وصولي محدود، ولو حاجة وقفت في طريقي ممكن الإشارة تتقطع، وبعض الأنظمة ممكن تتأثر بالإضاءة المحيطة.",
        types: [
            {
                name: "Point-to-Point Infrared",
                en: "I send a signal directly between two devices.",
                ar: "أنا بوصل الإشارة مباشرة بين جهازين، وده يناسب تطبيقات محتاجة اتصالًا قريبًا ومحددًا."
            },
            {
                name: "Diffuse Infrared",
                en: "I use reflected or spread infrared energy rather than relying only on one narrow direct beam.",
                ar: "أنا بعتمد على انتشار الأشعة أو انعكاسها بدل ما أعتمد فقط على شعاع مباشر ضيق، حسب تصميم النظام."
            }
        ]
    }
];

const switchingTypes = [
    {
        name: "Circuit Switching",
        subtitle: "A dedicated path",
        self: "I establish a dedicated communication path between two endpoints before communication begins. That path remains reserved during the session.",
        ar: "أنا بحجز مسار اتصال بين الطرفين قبل ما التواصل يبدأ، والمسار ده بيفضل مخصص للاتصال طول الجلسة.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
        advantage: "I provide a dedicated path and predictable transmission once the connection is established.",
        advantageAr: "لما الاتصال يتجهز، بيكون فيه مسار مخصص بين الطرفين، وده ممكن يدي أداءً متوقعًا أثناء الاتصال.",
        disadvantage: "I reserve resources even when no data is being sent, and establishing a connection takes time.",
        disadvantageAr: "المشكلة إني ممكن أفضل حاجز موارد حتى لو مفيش بيانات بتتبعت، وكمان لازم أجهّز الاتصال قبل ما يبدأ نقل البيانات.",
        types: [
            {
                name: "Space-Division Switching",
                en: "I connect endpoints using separate physical paths or switching connections.",
                ar: "أنا بستخدم مسارات أو توصيلات مادية منفصلة لربط الأطراف ببعض."
            },
            {
                name: "Time-Division Switching",
                en: "I allocate specific time slots to different connections.",
                ar: "أنا بقسّم وقت الاستخدام، وكل اتصال بيكون ليه فترات زمنية مخصصة حسب النظام."
            }
        ]
    },
    {
        name: "Packet Switching",
        subtitle: "Data in small packets",
        self: "I divide a message into smaller units called packets. Network devices forward these packets through shared network links toward their destination.",
        ar: "أنا بقسّم الرسالة لحزم صغيرة بدل ما أحجز خط كامل للرسالة. كل حزمة بتتنقل خلال الشبكة لحد ما توصل، والشبكة بتشارك مواردها بين مستخدمين كتير.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
        advantage: "I use network links efficiently because many users can share the same network resources.",
        advantageAr: "أنا باستغل موارد الشبكة بشكل أفضل؛ بدل ما خط يفضل محجوز لاتصال واحد، كذا مستخدم يقدروا يشاركوا الشبكة.",
        disadvantage: "Packets may experience variable delays, arrive out of order, or be lost during congestion.",
        disadvantageAr: "لو الشبكة مزدحمة، الحزم ممكن تتأخر أو توصل بترتيب مختلف أو بعضها يضيع. عشان كده التطبيقات اللي محتاجة استجابة سريعة لازم تهتم بالتأخير وفقد الحزم.",
        types: [
            {
                name: "Virtual Circuit",
                en: "I establish a logical route before sending packets, and packets generally follow that route.",
                ar: "أنا بجهّز مسارًا منطقيًا للاتصال الأول، وبعدها الحزم غالبًا بتتبع المسار ده."
            },
            {
                name: "Datagram",
                en: "I treat each packet independently, so packets may follow different routes.",
                ar: "أنا بتعامل مع كل حزمة لوحدها؛ ممكن كل حزمة تمشي في طريق مختلف عن التانية، وبالتالي ترتيب الوصول مش مضمون."
            }
        ]
    },
    {
        name: "Virtual Circuit",
        subtitle: "A logical route",
        self: "I am a form of packet switching. A logical connection is established first, and packets are associated with that connection.",
        ar: "أنا نوع من Packet Switching، لكن قبل إرسال الحزم بيتجهز اتصال منطقي، والحزم بتبقى مرتبطة بالاتصال ده.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
        advantage: "I provide a consistent logical route and make it easier for the network to associate packets with one connection.",
        advantageAr: "ميزة المسار المنطقي إني بخلّي الحزم مرتبطة باتصال معروف، وده بيساعد الشبكة تتعامل معاها باعتبارها جزءًا من نفس الجلسة.",
        disadvantage: "I need connection setup, and a failure affecting the established route may disrupt the connection.",
        disadvantageAr: "لازم أجهّز الاتصال قبل إرسال البيانات، ولو عطل أثّر على المسار أو الاتصال نفسه، ممكن التواصل يتأثر.",
        types: [
            {
                name: "Switched Virtual Circuit (SVC)",
                en: "I am established when needed and released after the communication session.",
                ar: "أنا اتصال افتراضي بيتعمل وقت الحاجة، وبعد انتهاء الجلسة بيتقفل."
            },
            {
                name: "Permanent Virtual Circuit (PVC)",
                en: "I am configured as a persistent logical connection rather than being set up for each session.",
                ar: "أنا اتصال افتراضي بيكون متجهز بشكل مستمر، بدل ما يتم إنشاؤه من جديد لكل جلسة."
            }
        ]
    },
    {
        name: "Datagram",
        subtitle: "Independent packets",
        self: "I am a form of packet switching. Each packet is handled independently and may take a different route to its destination.",
        ar: "أنا نوع من Packet Switching، وكل حزمة عندي مستقلة. الراوترات ممكن تختار لكل حزمة مسارًا مختلفًا حسب ظروف الشبكة.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
        advantage: "I can adapt routing decisions to network conditions, and I do not require a dedicated connection setup for each communication.",
        advantageAr: "أنا مرن؛ الشبكة ممكن تغيّر مسار الحزم حسب الظروف، ومش لازم أجهّز اتصالًا ثابتًا قبل كل إرسال.",
        disadvantage: "Packets may arrive out of order, take different amounts of time, or be lost.",
        disadvantageAr: "الحزم ممكن توصل بترتيب مختلف أو تتأخر بدرجات مختلفة، والتطبيق أحيانًا يحتاج يرتب البيانات أو يتعامل مع الحزم المفقودة.",
        types: [
            {
                name: "Connectionless Delivery",
                en: "I send packets without establishing a virtual circuit first.",
                ar: "أنا ببعت الحزم من غير ما أعمل اتصالًا افتراضيًا ثابتًا قبل الإرسال."
            },
            {
                name: "Independent Routing",
                en: "Each packet can be routed according to the network's current routing information.",
                ar: "كل حزمة ممكن يتحدد مسارها بناءً على معلومات التوجيه المتاحة للشبكة وقت وصولها."
            }
        ]
    },
    {
        name: "Message Switching",
        subtitle: "Store and forward",
        self: "I handle the entire message as one unit. Each intermediate node stores the complete message before forwarding it to the next node.",
        ar: "أنا مش بقسّم الرسالة لحزم صغيرة زي Packet Switching؛ العقدة الوسيطة بتستقبل الرسالة كاملة وتخزنها، وبعد كده تبعتها للمكان اللي بعده.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
        advantage: "I do not need a dedicated end-to-end circuit, and intermediate nodes can store messages before forwarding them.",
        advantageAr: "أنا مش محتاج أحجز خطًا ثابتًا بين الطرفين طول الوقت، والعقد الوسيطة تقدر تخزن الرسائل وتبعتها لما يكون فيه إمكانية.",
        disadvantage: "I can introduce large delays and require enough storage to hold complete messages.",
        disadvantageAr: "عيبي إن الرسالة لازم تتخزن كاملة قبل ما تتبعت للخطوة اللي بعدها، وده ممكن يسبب تأخيرًا كبيرًا ويحتاج مساحة تخزين مناسبة.",
        types: [
            {
                name: "Store-and-Forward",
                en: "I receive and store a complete message before forwarding it.",
                ar: "أنا بستقبل الرسالة كاملة، أخزنها، وبعد كده أبعثها للمرحلة التالية."
            },
            {
                name: "Message Queuing",
                en: "I can hold messages in a queue until the next link or node is ready.",
                ar: "أنا ممكن أحتفظ بالرسائل في طابور انتظار لحد ما المسار أو العقدة التالية تبقى جاهزة لاستقبالها."
            }
        ]
    }
];

function createCards(data, containerId, detailsId) {
    const container = document.getElementById(containerId);
    const details = document.getElementById(detailsId);

    data.forEach((item) => {
        const button = document.createElement("button");
        button.className = "item";
        button.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.subtitle}</p>
    `;

        button.addEventListener("click", () => {
            container.querySelectorAll(".item").forEach(card =>
                card.classList.remove("active")
            );

            button.classList.add("active");

            details.innerHTML = `
        <h2>${item.name}</h2>

        <h3>Who Am I?</h3>
        <p class="speech">"${item.self}"</p>

        <img
          src="${item.image}"
          alt="${item.name} illustration"
          loading="lazy"
          onerror="this.style.display='none'"
        >

        <div class="arabic">
          <strong>بالمصري:</strong><br>
          ${item.ar}
        </div>

        <div class="action-buttons">
          <button class="action-btn" data-topic="advantage">
            Advantage
          </button>

          <button class="action-btn" data-topic="disadvantage">
            Disadvantage
          </button>

          <button class="action-btn" data-topic="types">
            Types
          </button>
        </div>

        <div class="topic-panel" data-panel="advantage">
          <h3>My Advantages</h3>
          <p>${item.advantage}</p>
          <div class="arabic">
            <strong>مميزاتي بالمصري:</strong><br>
            ${item.advantageAr}
          </div>
        </div>

        <div class="topic-panel" data-panel="disadvantage">
          <h3>My Disadvantages</h3>
          <p>${item.disadvantage}</p>
          <div class="arabic">
            <strong>عيـوبي بالمصري:</strong><br>
            ${item.disadvantageAr}
          </div>
        </div>

        <div class="topic-panel" data-panel="types">
          <h3>My Types</h3>
          ${item.types.map(type => `
            <div class="type-entry">
              <h4>${type.name}</h4>
              <p>${type.en}</p>
              <div class="arabic">
                <strong>بالمصري:</strong><br>
                ${type.ar}
              </div>
            </div>
          `).join("")}
        </div>
      `;

            details.classList.add("show");

            details.querySelectorAll(".action-btn").forEach(topicButton => {
                topicButton.addEventListener("click", () => {
                    const topic = topicButton.dataset.topic;
                    const panel = details.querySelector(
                        `[data-panel="${topic}"]`
                    );

                    const wasOpen = panel.classList.contains("show");

                    details.querySelectorAll(".topic-panel").forEach(section =>
                        section.classList.remove("show")
                    );

                    details.querySelectorAll(".action-btn").forEach(btn =>
                        btn.classList.remove("active")
                    );

                    if (!wasOpen) {
                        panel.classList.add("show");
                        topicButton.classList.add("active");
                    }
                });
            });

            details.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        });

        container.appendChild(button);
    });
}

createCards(mediaTypes, "mediaItems", "mediaDetails");
createCards(switchingTypes, "switchItems", "switchDetails");
const showDiagram = document.getElementById("showDiagram");
const diagramScreen = document.getElementById("diagramScreen");
const closeDiagram = document.getElementById("closeDiagram");

showDiagram.addEventListener("click", function () {
    diagramScreen.classList.add("active");
});

closeDiagram.addEventListener("click", function () {
    diagramScreen.classList.remove("active");
});