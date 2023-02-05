import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'green'
            ? '#00A876'
            : 'white',
    flexDirection: 'row-reverse',
    '& .MuiTypography-root': {
        fontWeight: '600',
        fontFamily: 'Arimo',
    },
    '& .MuiAccordionSummary-root': {
        fontFamily: 'Arimo',
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
        fontFamily: 'Arimo',
        boxShadow: '0px -30px 40px -30px rgb(0 168 118 / 20%)',
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid #00A876',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Для кого предназначен этот тренажёр?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Онлайн-тренажёр предназначен для любого, кто желает развить навыки слепой печати. Слепая печать – этот навык, позволяющий печатать не глядя на клавиатуру.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Почему мне необходимо зарегистрироваться?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        После регистрации вам будет предоставляться информация, позволяющая отслеживать ваш собственный прогресс, и статистические данные.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Сколько времени требуется для овладения навыками слепой печати?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Время, необходимое для овладения навыками слепой печати, во многом зависит от ваших индивидуальных способностей. Большую роль также играет регулярность тренировки. Чтобы достичь хороших результатов постарайтесь выполнять по одному уроку в день.
                        Помните, знание местонахождения всех букв еще не означает умение быстро печатать. Необходимо, чтобы ваши пальцы запомнили определенные двигательные шаблоны, развить так называемую «мышечную память движений», когда пальцы сами знают, где находится каждая клавиша, не задумываясь и не смотря на клавиатуру. Автоматизация движений достигается только с помощью многократных повторений.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}