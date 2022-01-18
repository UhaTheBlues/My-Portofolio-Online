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
                Saya lahir di Boyolali pada tanggal 23 Februari 2000 (21 Tahun).
                Sekarang saya tinggal di Bekasi Selatan.
                Saya memiliki Hobby Fotografi, Videografi, Riding Motorsport, dan juga bermain Games pada waktu luang.
                Kelebihan yang saya miliki adalah rasa ingin tahu yang tinggi, 
                dapat beradaptasi dengan cepat, 
                dan dapat berkomunikasi dalam team dengan baik.
                Kelemahan yang saya miliki adalah takut akan hal yang belum pernah saya ketahui,
                tetapi dengan kelemahan itu saya dapat segera mencari informasi hal yang belum saya ketahui.
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
