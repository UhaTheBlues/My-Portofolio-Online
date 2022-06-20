import React from 'react'
import styled from 'styled-components';
import { Section, SectionText, SectionTitle, } from '../../styles/GlobalComponents';

const AboutMe = () => {
    return (
        <Section id='aboutme' row nopadding>
            <LeftSection>
                <SectionTitle main center>
                Tentang Saya
                </SectionTitle>
                <SectionText>
                Saya lahir di Boyolali pada tanggal 23 Februari 2000.
                Sekarang saya tinggal di Bekasi Selatan.
                Saya memiliki Hobby Videografi, Riding Motorsport, dan juga bermain Games pada waktu luang.
                Setelah lulus kuliah saya mengisi kegiatan saya mengikuti Course berbayar maupun gratis yang disediakan pemerintah,
                selain kegiatan tersebut saya juga Freelance membuat Website, dan memanfaatkan teknologi Blockchain untuk menghasilkan uang.
                <br></br>Kelebihan yang saya miliki adalah rasa ingin tahu yang tinggi, 
                dapat beradaptasi dengan cepat, 
                dan dapat berkomunikasi dalam team dengan baik.
                Kelemahan yang saya miliki adalah takut akan hal yang belum pernah saya ketahui,
                tetapi dengan kelemahan itu membuat saya akan merasa tertantang dengan hal baru.
                </SectionText>
            </LeftSection>
        </Section>
    )
}

export const LeftSection = styled.div`
  width: 100%;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export default AboutMe
