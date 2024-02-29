import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li
          key={i}
          className={isDark ? "subTitle dark-mode-text" : "subTitle"}
        >
          {item}
        </li>
      ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{ background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred-div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
        {cardInfo.projects?.map((project, i) => i % 2 === 0 ? (
          <div className="experience-project-container">
            <div className="experience-project-details">
              {project.header && (
                <h3
                  className={
                    isDark
                      ? "experience-project-heading dark-mode-text"
                      : "experience-project-header"
                  }
                >
                  {project.header}
                </h3>
              )}
              <ul>
                <GetDescBullets descBullets={project.descBullets} isDark={isDark} />
              </ul>
            </div>
            <Swiper
              style={{ maxHeight: '500px', width: '100%' }}
              modules={[Navigation, A11y, EffectCards]}
              pagination={{ clickable: true }}
              navigation={true}
            >
              {project.photos?.map((photo, i) => (
                <SwiperSlide key={`slide ${photo}`} style={{ display: 'flex', justifyContent: 'center', maxHeight: '500px' }}>
                  <img src={photo} alt="" style={{ maxWidth: '80%' }} className="img-scale-down" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="experience-project-container-odd">
            <div className="experience-project-details">
              {project.header && (
                <h3
                  className={
                    isDark
                      ? "experience-project-heading dark-mode-text"
                      : "experience-project-header"
                  }
                >
                  {project.header}
                </h3>
              )}
              <ul>
                <GetDescBullets descBullets={project.descBullets} isDark={isDark} />
              </ul>
            </div>
            <Swiper
              style={{ maxHeight: '500px', width: '100%' }}
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={10}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
            >
              {project.photos?.map((photo, i) => (
                <SwiperSlide key={i} style={{ display: 'flex', justifyContent: 'center', maxHeight: '500px' }}>
                  <img src={photo} alt="" style={{ maxWidth: '80%' }} className="img-scale-down" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )
        
        )}
      </div>
    </div>
  );
}
