package randomizer;

public class Jing_Wei extends godClass{ 
    public Jing_Wei() {
    	 this.role = "ADC";
         this.damageType = "Physical";
         this.gameDefinedClass = "Hunter";
    }


public static void main(String args[]){
    Jing_Wei test = new Jing_Wei();
    System.out.println(test.getDamageType());
    }
}
