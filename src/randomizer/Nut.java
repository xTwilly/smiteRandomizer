package randomizer;

public class Nut extends godClass{ 
    public Nut() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Nut test = new Nut();
    System.out.println(test.getDamageType());
    }
}
