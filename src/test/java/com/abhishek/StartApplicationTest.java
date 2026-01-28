package com.abhishek;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class StartApplicationTest {

    @Test
    void contextLoads() {
    }

    @Test
    void createApplicationInstance() {
        new StartApplication();
    }
}