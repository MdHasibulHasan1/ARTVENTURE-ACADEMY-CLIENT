import React, { useState } from "react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex">
      <div className="relative font-Poppins">
        <span
          className={`${
            !isMenuOpen ? "right-0 " : "left-0"
          } absolute block text-white text-4xl top-0 p-1 rounded-lg cursor-pointer lg:hidden`}
          onClick={toggleSidebar}
        >
          {isMenuOpen ? (
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          ) : (
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
              />
            </svg>
          )}
        </span>
        <aside
          className={`border border-gray-950 top-0 p-4 bottom-0 lg:left-0 fixed inset-0 z-50 ${
            isMenuOpen ? "left-0 hidden lg:block" : ""
          } lg:duration-1000 py-2 lg:w-[300px] duration-1000 overflow-y-auto text-center transition-all bg-gray-100 shadow h-screen lg:static lg:translate-x-0`}
        >
          <div className="border mt-4 border-orange-600 text-left text-xl">
            <nav>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>

              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              <div className=" text-white my-3 gap-3 py-2 flex items-center rounded-md px-6 duration-300 bg-black cursor-pointer hover:bg-blue-600">
                <div>G</div>
                <span className="text-[15px] text-gray-200">Logout</span>
              </div>
              {/* ... your other menu items ... */}
            </nav>
          </div>
        </aside>
      </div>
      <div className="flex-grow">
        Main content Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Doloremque sunt porro quam iste saepe excepturi corrupti eos similique
        illum amet nemo eum blanditiis pariatur tenetur omnis sapiente vel,
        aliquam assumenda odio, est sequi odit suscipit provident eveniet?
        Culpa, quam. Voluptates, ratione fuga maxime dolore ullam veniam tempora
        ipsum aliquid distinctio tenetur, aliquam optio error sunt consectetur
        corrupti. Esse, assumenda. Pariatur at quo ut dolore sapiente nobis?
        Praesentium odit facilis consequatur doloremque sit sint quo fugiat
        suscipit perferendis porro. Dolorum quaerat, rem voluptas voluptatem
        facere velit labore temporibus pariatur perferendis ratione laudantium
        eius et, voluptatibus molestias repellendus iure ipsam nam accusantium
        soluta distinctio aut repudiandae cupiditate exercitationem saepe?
        Tenetur neque reprehenderit id autem porro ducimus, unde voluptatibus
        eos officia alias ipsum blanditiis eaque dicta accusamus! Commodi
        molestiae repellendus, illo necessitatibus id itaque reprehenderit nulla
        dicta voluptatem ipsa dolorum nemo tempore, nihil quaerat facilis sint
        porro? Earum, eaque officiis. Ipsum cumque saepe illo hic distinctio
        odio nostrum accusamus sint, facere aperiam dolorem tempore ea tempora
        reiciendis incidunt! Error, vero! Est unde, tempore consequatur ipsum
        cupiditate ipsam ullam vitae explicabo aliquam molestias voluptate et
        saepe minima vero, labore perferendis sint impedit. Tempora voluptate
        obcaecati aperiam rerum quia distinctio iste, alias iure doloribus ut
        sequi placeat libero ratione adipisci esse maxime laboriosam doloremque
        asperiores amet eligendi! Saepe, ducimus eaque. Error ipsum amet dicta
        est? Eius eveniet maiores cum voluptas delectus reiciendis quam, ipsum
        ullam eligendi error dolorum recusandae dolore? Unde iste veritatis eos
        magni natus ipsam asperiores hic reprehenderit aut dolorem quod sit
        fugiat nobis architecto, laborum, sapiente et? Ipsam tempore illum nam
        delectus eos enim animi, dignissimos voluptate est quibusdam maxime
        consequatur quaerat! Quos, dolorum! Suscipit vero iste similique libero
        consequuntur ab molestiae optio. Vel eaque nostrum, recusandae ullam
        dolorem repellat nemo debitis aliquam impedit, tenetur eveniet omnis
        vero quisquam quidem quasi odio itaque veritatis dicta magnam non sit
        nihil error neque. Temporibus explicabo cum ipsam eum eaque consequatur!
        Quis asperiores temporibus et debitis eius quam molestiae sit
        voluptatum? Architecto aliquid soluta magni voluptas amet consequatur
        repellat autem libero ipsa, asperiores consectetur illum doloremque
        dolore corrupti sint vitae possimus sunt nostrum ratione placeat itaque
        consequuntur quam quos fugiat! Fugit, libero? Ad unde commodi quia
        ducimus, fugit, excepturi, nisi voluptas animi at aliquam nesciunt.
        Laudantium beatae odit reiciendis quod rerum fugit voluptas! Blanditiis
        delectus esse temporibus, soluta eaque minima voluptatibus ullam,
        aspernatur hic ipsa accusamus natus error libero rem! Ratione porro,
        consequuntur similique odio voluptatum explicabo tempora delectus.
        Officiis ipsam unde, nam quasi mollitia repellendus consectetur. Quod
        numquam harum officiis, magnam saepe voluptates expedita accusamus
        veniam alias delectus debitis officia iusto fugit perferendis ipsum
        illum illo ab enim ipsa soluta ipsam obcaecati ad hic. Tenetur ea
        adipisci excepturi nemo similique quo exercitationem sequi harum non ad
        doloremque, repellat accusamus suscipit omnis officiis cum accusantium
        nisi placeat assumenda consectetur expedita! Porro, eveniet. Suscipit
        voluptas, tempore deleniti ipsam eius dolores error culpa. Perspiciatis
        nemo ipsum dolor alias magnam nam quod assumenda tempore doloremque eum
        maxime quia placeat ducimus accusantium quis repellendus, laborum et
        temporibus possimus fugiat commodi rerum cumque eius? Similique pariatur
        odio mollitia corrupti ab quis sint vero quisquam, excepturi ea natus
        iste aliquid laborum repudiandae maiores quam voluptatum, dignissimos,
        voluptate tempora! Quaerat laborum, placeat laboriosam expedita
        consequuntur, fugit officia sed voluptas, reiciendis enim doloribus?
        Molestias, consectetur neque consequuntur eius dignissimos suscipit
        magnam labore distinctio quos ullam fugiat quas, nam sunt amet
        temporibus eaque cupiditate in cum delectus repellat. Ratione, incidunt.
        Repellat sequi ut sit voluptates, veniam eligendi soluta delectus,
        accusamus temporibus neque id alias. Nemo facere praesentium nulla
        similique est aperiam incidunt provident exercitationem impedit, commodi
        consequatur magnam reprehenderit, optio repellendus sapiente cumque
        placeat ipsa nostrum non deserunt atque officia. Voluptates minus esse
        nulla culpa totam porro vitae neque, modi laborum velit possimus
        provident architecto? Magnam hic ipsa similique voluptate odit
        voluptatibus in a quos. Deleniti facilis eaque eos fugiat dignissimos!
        Nulla at, sequi sapiente, consequuntur numquam fugiat, eum reprehenderit
        eligendi quisquam laudantium iusto delectus! Ut quo non obcaecati, magni
        eum molestiae amet accusamus commodi, vel consequuntur corrupti libero.
        Rerum provident quis ad fugiat velit, quibusdam at? Magni autem ex
        placeat minus doloremque voluptate, omnis voluptas nesciunt. Sed dolore
        laborum laudantium quo quos maxime nihil, molestias reiciendis vitae qui
        deleniti, odio ullam delectus cumque explicabo velit libero officia
        commodi sapiente enim. Illo id eos iure facilis assumenda debitis quasi
        quisquam, veritatis labore illum. Facilis, cupiditate ducimus ipsam
        earum labore vitae quas voluptas sunt. Fuga placeat quos, quasi nesciunt
        eos quas numquam et! Repellat perferendis autem fuga nam exercitationem
        eos eveniet laudantium ipsam quasi veritatis quaerat corporis tenetur
        ducimus dolore, soluta voluptatibus quae accusamus odit velit. Amet eos
        ad eaque, velit nulla iste eius voluptates doloribus libero, esse
        suscipit pariatur rerum consequuntur, voluptatibus repudiandae
        perspiciatis! Unde, rem minima. Excepturi eligendi harum, facere sunt
        saepe tempore qui facilis accusantium animi voluptate corporis, ex
        molestiae deleniti unde assumenda est ipsum nam! Aliquam quaerat aperiam
        vitae quas quae fugit, eius officia quis, repellat totam voluptates ex
        distinctio suscipit quos architecto, recusandae asperiores vel omnis!
        Porro perferendis similique, labore dolorem fuga eius exercitationem rem
        adipisci recusandae pariatur debitis, sit doloribus numquam culpa minus
        amet ea, distinctio dolorum explicabo eos impedit eum consequatur
        voluptatum esse! Explicabo ullam ad sed nihil nulla quaerat quibusdam ab
        atque aut! Repudiandae incidunt delectus assumenda facilis, unde illum
        ipsam optio alias reprehenderit expedita quidem nulla fuga quis amet sit
        eos maxime dicta blanditiis eum vitae harum. Sit aut ipsa error dolorem
        culpa facere sunt deleniti, hic veritatis blanditiis. Ullam accusantium
        possimus sit minus inventore velit quidem doloribus? Atque error unde
        cupiditate iste eius deserunt! Provident nam quaerat quos! Beatae
        repudiandae voluptatem ad tempora, earum suscipit pariatur officiis
        exercitationem adipisci sit? A consectetur sit possimus, debitis hic
        optio, sapiente cum, alias saepe sequi numquam cumque expedita neque
        aliquam dolorem ratione consequuntur dolorum dicta? Non necessitatibus
        eius molestiae, laborum optio harum ipsa voluptatem obcaecati, eaque
        culpa accusantium suscipit beatae? Dolorem exercitationem voluptatum
        delectus labore, quod ab minima. Minus, praesentium fugiat voluptates
        odio quibusdam hic autem optio obcaecati vitae quod quam beatae aperiam!
        Quaerat hic expedita voluptas dolorem.
      </div>
    </div>
  );
};

export default Sidebar;
